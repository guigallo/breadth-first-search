const formidable = require('formidable');
const routesHelper = require('../helper/routesHelper');
const filesHelper = require('../helper/filesHelper');
const graphHelper = require('../helper/graphHelper');
const Graph = require('../classes/Graph');
const SearchAlgorithm = require('../classes/SearchAlgorithm');

function formData(req) {
  const errorsMessage = [];

  return new Promise((resolve, reject) => {
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {

      const object = graphHelper.fileToObject(files);
      if(object.hasOwnProperty('errors')) {
        errorsMessage.push('json not valid');
        errorsMessage.push(...object.errors);
        reject(errorsMessage)
      } else {
        resolve(object);
      }
    });
  });
}

function validateGraphRequest(req) {
  const errorsMessage = [];
  return new Promise((resolve, reject) => {
    switch(routesHelper.getContentType(req)) {
      case 'multipart/form-data':
        formData(req)
          .then((json) => filesHelper.saveJson(json) ? resolve(json) : reject(['Please send an JSON']))
          .catch(errors => reject(errors));
        break;

      case 'application/json':
        const validateErrors = graphHelper.validateJson(req.body);
        if(validateErrors.length > 0) {
          errorsMessage.push('json not valid', ...validateErrors);
          reject(errorsMessage);
          break;
        }

        const json = filesHelper.saveJson(req.body);
        if(errorsMessage.length > 0 && json)
          errorsMessage.push('Please send an JSON on body request');

        errorsMessage.length > 0 ? reject(errorsMessage) : resolve(req.body.id);
        break;

      default:
        errorsMessage.push('Content-Type invalid');
        reject(errorsMessage);
    }
  });
}

module.exports = app => {
  app.route('/graphs')
    .get((req, res) =>
      filesHelper.getFiles()
        .then(files => {
          files.reverse();
          routesHelper.factoryResponse(res, 200, { graphs: files, message: ''}, 'graphs/index')
        })
        .catch(() => routesHelper.factoryResponse(res, 400, 'No files to get', 'graphs/index'))
    )
    .post((req, res) => 
      validateGraphRequest(req)
        .then(id => routesHelper.factoryResponse(res, 201, { id, message: 'File upload sucess' }, 'graphs/uploaded'))
        .catch(err => routesHelper.factoryResponse(res, 400, { message: err }, 'graphs/uploaded'))
    );

  app
  .get('/graphs/:id', (req, res) =>
    filesHelper.getFileByName(req.params.id)
      .then(file => {
        const graph = new Graph(file.file);
        const search = new SearchAlgorithm(graph);
        const sequence = search.start();
        
        routesHelper.factoryResponse(res, 200, { file, sequence }, 'graphs/graph')
      })
      .catch(() => routesHelper.factoryResponse(res, 404, 'File not found'))
  )
}