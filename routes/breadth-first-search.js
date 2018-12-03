const Graph = require('../Classes/Graph');
const sample = require('../data/sample-friendly-name').json();

module.exports = app => {
  app.route('/breadth-first-search')
    .get((req, res) => {
      res.send('get');
    })
    .post((req, res) => {
      res.send('post');
    });

  app.get('/breadth-first-search/sample', (req, res) => {
    const graph = new Graph(sample);
    console.log(graph);
    const data = [1, 2, 3, 4, 5];
    res.render('breadth-first-search/sample', { data });
  })
}