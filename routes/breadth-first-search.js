const Graph = require('../Classes/Graph');
const SearchAlgorithm = require('../Classes/SearchAlgorithm');
const sample = require('../data/sample');
const sampleFriendly = require('../data/sample-friendly-name');
const formidable = require('formidable');
const fs = require('fs');

module.exports = app => {
  app.route('/breadth-first-search')
    .get((req, res) => {
      res.send('get');
    })
    .post((req, res) => {
      const reqContentType = req.get('Content-Type').toLowerCase();
      let contentType
      if(reqContentType.startsWith('multipart/form-data'))
        contentType = 'multipart/form-data';
      if(reqContentType.startsWith('application/json'))
        contentType = 'application/json';
      
      switch (contentType) {
        case 'multipart/form-data':
          let form = new formidable.IncomingForm();
          form.parse(req, function (err, fields, files) {
            if(files.uploadFile !== undefined) {
              const oldpath = files.uploadFile.path;
      
              const hash = files.uploadFile.lastModifiedDate.getTime();
              const fileName = files.uploadFile.name;
              const newPath = `uploads/${hash}_${fileName}`;
              
              fs.rename(oldpath, newPath, function(err) {
                if(err)
                  return console.log(err);
              })
            } else {
              res.write('Please send an JSON');
              res.end();
            }
          });
          break;

        case 'application/json':
          if(req.body !== undefined) {
            const json = JSON.stringify(req.body);
            const fileName = `uploads/${new Date().getTime()}.json`
            fs.writeFile(fileName , json, function(err) {
              if(err)
                return console.log(err);
            });
          } else {
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
      })
    });

  app.get('/breadth-first-search/sample', (req, res) => {
    let graph;

    let friendly;
    if(req.query.friendlyName === 'true') {
      friendly = true;
      graph = new Graph(sampleFriendly.json());
    } else {
      friendly = false;
      graph = new Graph(sample.json());
    }

    let fullDetails;
    if(req.query.fullDetails === 'true') {
      fullDetails = true;
    } else {
      fullDetails = false;
    }

    try {
      const search = new SearchAlgorithm(graph);
      const result = search.start();
      
      res.format({
        html: () => {
          res.render('breadth-first-search/sample', { values: result, friendly, fullDetails });
        },
        json: () => {
          res.json(result);
        }
      })
    } catch (err) {
      console.log(err);
      res.send('error to create graph');
    }
  })

  app.get('/breadth-first-search/upload', (req, res) => {
    res.render('breadth-first-search/form');
  })
}