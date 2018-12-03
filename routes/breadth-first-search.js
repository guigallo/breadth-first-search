const Graph = require('../Classes/Graph');
const SearchAlgorithm = require('../Classes/SearchAlgorithm');
const sample = require('../data/sample');
const sampleFriendly = require('../data/sample-friendly-name');

module.exports = app => {
  app.route('/breadth-first-search')
    .get((req, res) => {
      res.send('get');
    })
    .post((req, res) => {
      res.send('post');
    });

  app.get('/breadth-first-search/sample', (req, res) => {
    let graph;
    if(req.query.friendlyName === 'true') {
      graph = new Graph(sampleFriendly.json());
    } else {
      graph = new Graph(sample.json());
    }

    let search;
    try {
      search = new SearchAlgorithm(graph);
      const result = search.start();
      
      res.format({
        html: () => {
          res.render('breadth-first-search/sample', { values: result });
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
}