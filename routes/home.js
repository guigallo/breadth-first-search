module.exports = app => {
  app.route('/')
    .get((req, res) => {
      res.render('home/index');
    })
}