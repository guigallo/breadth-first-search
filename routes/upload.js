module.exports = app => {
  app.get('/upload', (req, res) => {
    res.render('upload/index');
  })
}