const Graph = require('../classes/Graph');
const SearchAlgorithm = require('../classes/SearchAlgorithm');
const sample = require('../data/sample');
const sampleFriendly = require('../data/sample-friendly-name');

module.exports = app => {
  app.get('/sample', (req, res) => {
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
          res.render('graphs/sample', { values: result, friendly, fullDetails });
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