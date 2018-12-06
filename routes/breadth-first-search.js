const formidable = require('formidable');
const routesHelper = require('../helper/routesHelper');
const filesHelper = require('../helper/filesHelper');
const graphHelper = require('../helper/graphHelper');

function formData(req) {
  return new Promise((resolve, reject) => {
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      const errorsMessage = [];
      const validateErrors = graphHelper.validateFile(files);
      if(validateErrors.length > 0) {
        errorsMessage.push('json not valid');
        errorsMessage.push(...validateErrors);
        reject(errorsMessage)
      } else {
        resolve(files);
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
          .then(() => filesHelper.move(files) ? resolve() : reject(['Please send an JSON']))
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

module.exports = app => {
  app.route('/breadth-first-search')
    .get((req, res) => {
      res.send('get');
    })

    .post((req, res) => {
      
      validateGraphRequest(req)
        .then(() => {
          let errorsMessage = [];
          res.format({
            'text/html':        () => routesHelper.response(res, 201, 'render', errorsMessage, 'File saved successfully', 'breadth-first-search/index'),
            'application/json': () => routesHelper.response(res, 201, 'json', errorsMessage, { message: 'json received' }),
            'default':          () => routesHelper.response(res, 406, 'send', errorsMessage, 'Not Acceptable')
          });
        })
        .catch((err) => {
          console.log(err);
          console.log(5);
          //reject(err)
        });
      });

        /*
      console.log('will response');
    }); */
}