const formidable = require('formidable');
const routesHelper = require('../helper/routesHelper');
const filesHelper = require('../helper/filesHelper');
const graphHelper = require('../helper/graphHelper');

function formData(req) {
  return new Promise((resolve, reject) => {
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      const errorsMessage = [];
      const validateErrors = graphHelper.validateFile(files); //
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
module.exports = app => {
  app.route('/breadth-first-search')
    .get((req, res) => {
      res.send('get');
    })

    .post((req, res) => {
      let request = new Promise((resolve, reject) => {
        let validation = new Promise((valid, invalid) => {
          switch(routesHelper.getContentType(req)) {
            case 'multipart/form-data':
              formData(req)
                .then(() => {
                  if(filesHelper.move(files)) {
                    valid();
                  } else {
                    invalid(['Please send an JSON']);
                  } 
                })
                .catch(errors => {
                  invalid(errors);
                })/*
              console.log('case form');
              //const formData = new Promise((valid, invalid) => {
              const errorsMessage = [];
              let form = new formidable.IncomingForm();
              //form.parse(req, function (err, fields, files) {
              form.parse(req, function (err, fields, files) {
                const validateErrors = graphHelper.validateFile(files); //
                console.log(0);
                console.log(validateErrors);
                if(validateErrors.length > 0) {
                  errorsMessage.push('json not valid');
                  errorsMessage.push(...validateErrors);
                }

                if(! filesHelper.move(files))
                  errorsMessage.push('Please send an JSON');
              });

              console.log(errorsMessage);
              //})
              console.log('out promise');*/
              break;

            case 'application/json':
              const validateErrors = graphHelper.validateJson(req.body);
              if(validateErrors.length > 0) {
                errorsMessage.push('json not valid');
                errorsMessage.push(...validateErrors);
                break;
              }
    
              if(! filesHelper.saveJson(req.body)) {
                errorsMessage.push('Please send an JSON on body request');
                break;
              }
              break;
    
            default:
              errorsMessage.push('Content-Type invalid');
          }
        });


        /*
        if(errorsMessage.length > 0)
          invalid(errorsMessage);

        valid();*/
        //});
        
        validation
          .then(() => {
            console.log(4);
            resolve()
          })
          .catch((err) => {
            console.log(5);
            reject(err)
          });
      });

      request
        .then(() => {

          console.log(6)
        })
        .catch(err => {
          console.log(7)
          console.log(err)

        })
      /*
      console.log(3);
      request
        .then(() => {

          console.log(6);
        })
        .catch(err => {
          console.log(7);
          console.log(err);
        })
*/

        /*
      console.log('will response');
      res.format({
        'text/html':        () => routesHelper.response(res, 201, 'render', errorsMessage, 'File saved successfully', 'breadth-first-search/index'),
        'application/json': () => routesHelper.response(res, 201, 'json', errorsMessage, { message: 'json received' }),
        'default':          () => routesHelper.response(res, 406, 'send', errorsMessage, 'Not Acceptable')
      });*/
    });
}