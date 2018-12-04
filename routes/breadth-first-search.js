const formidable = require('formidable');
const fs = require('fs');
const routesHelper = require('../helper/routesHelper');
const filesHelper = require('../helper/filesHelper');
//const { check, validationResult } = require('express-validator/check');

module.exports = app => {
  app.route('/breadth-first-search')
    .get((req, res) => {
      res.send('get');
    })

    .post((req, res) => {
      switch(routesHelper.getContentType(req)) {
        case 'multipart/form-data':
          let form = new formidable.IncomingForm();
          form.parse(req, function (err, fields, files) {
            if(! filesHelper.move(files)) {
              res.write('Please send an JSON');
              res.end();
            }
          });
          break;

        case 'application/json':
          if(! filesHelper.saveJson(req.body)) {
            res.write('Please send an JSON on body request');
            res.end();
          }
          break;

        default:
          res.write('Content-Type invalid');
          res.end();
      }

      res.format({
        'text/html': function(){
          res.status(201).send('<p>file saved successfully</p>');
        },

        'application/json': function(){
          res.status(201).send({ message: 'json received' });
        },

        'default': function() {
          res.status(406).send('Not Acceptable');
        }
      });
    });
}