const fs =  require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const consign = require('consign');
const app = express();
const routesHelper = require('../helper/routesHelper');

function checkUploadFolder() {
  var dir = 'uploads';
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    console.log(`+ Create directory: ./${dir}`);
  } else {
    console.log(`+ Upload directory: ./${dir}`);
  }
}

function setViews() {
  const pubDir = './public';
  app.use(express.static(pubDir));
  console.log('+ Public directory: %s', pubDir);

  const engine = 'pug';
  app.set('view engine', engine);
  console.log('+ View engine: %s', engine);

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

function setMiddlewares() {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(expressValidator());
  console.log('+ Middlewares loaded');
}

function autoLoad() {
  consign()
    .include('routes')
    .into(app);
}

function loadErrorsPages() {
  app.use((req, res, next) => {
    routesHelper.factoryResponse(res, 404, { message: 'not found' }, 'errors/404');
  });

  app.use((error, req, res, next) => {
    if (error)
      console.log(error);
    routesHelper.factoryResponse(res, 500, { error }, 'errors/404');
  });
  console.log('+ Errors page loaded');
}

module.exports = function() {
  checkUploadFolder();
  setViews();
  enableCors();
  setMiddlewares();
  autoLoad();
  loadErrorsPages();

  return app;
}