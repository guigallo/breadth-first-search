const routesHelper = require('../helper/routesHelper');

module.exports = app => {
  app.get('/upload', (req, res) =>
    routesHelper.factoryResponse(res, 200, { message: 'Nothing to show here' }, 'upload/index')
  )
}