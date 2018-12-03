module.exports = app => {
  app.route('/breadth-first-search')
    .get((req, res) => {
      res.send('get');
    })
    .post((req, res) => {
      res.send('post');
    });

  app.get('/breadth-first-search/sample', (req, res) => {
    res.send('sample');
  })
}