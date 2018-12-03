const express = require('express');
const consign = require('consign');
const app = express();

function setViews() {
  const pubDir = './public';
  app.use(express.static(pubDir));
  console.log('+ Public directory: %s', pubDir);

  const engine = 'pug';
  app.set('view engine', engine);
  console.log('+ View engine: %s', engine);

  //const views = path.join(__dirname, '/views');
  const views = './views';
  app.set('views', views);
  console.log('+ Views directory: %s', views);
}

function enableCors() {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  console.log('+ Cross-Origin Resource Sharing: enabled');
}

function autoLoad() {
  consign()
    .include('routes')
    .into(app);
}

function loadErrorsPages() {
  app.use((req, res, next) => {
    res.status(404).render('errors/404');
  });

  app.use((req, res, next) => {
    res.status(500).render('errors/500');
  });
}

module.exports = function() {
  setViews();
  enableCors();
  autoLoad();
  loadErrorsPages();

  return app;
}