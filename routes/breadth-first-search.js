const formidable = require('formidable');
const routesHelper = require('../helper/routesHelper');
const filesHelper = require('../helper/filesHelper');
const graphHelper = require('../helper/graphHelper');

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
        if(validateErrors.length > 0)
          errorsMessage.push('json not valid', ...validateErrors);

        if(errorsMessage.length === 0 && !filesHelper.saveJson(req.body))
          errorsMessage.push('Please send an JSON on body request');

        errorsMessage.length > 0 ? reject(['Please send an JSON']) : resolve();
        break;

      default:
        errorsMessage.push('Content-Type invalid');
        reject(errorsMessage);
    }
  });
}

function response(res, status, content, view = '') {
  res.format({
    'text/html': () =>
      routesHelper.response(res, status, 'render', content, view),
    'application/json': () =>
      routesHelper.response(res, status, 'json', { message: content}),
    'default': () =>
      routesHelper.response(res, 406, 'send', 'Not Acceptable')
  })
}

module.exports = app => {
  app.route('/breadth-first-search')
    .get((req, res) => {
      res.send('get');
    })

    .post((req, res) => 
      validateGraphRequest(req)
        .then(obj => response(res, 201, 'File saved successfully', 'breadth-first-search/index'))
        .catch(err => response(res, 400, err, 'breadth-first-search/index'))
      );
}