const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.route('/breadth-first-search')
  .get((req, res) => {
    res.send('get');
  })
  .post((req, res) => {
    res.send('post');
  });

app.get('/', (req, res) => {
  res.send('teste');
});

app.listen(3000, () => {
  console.log('Servidor rodando');
})