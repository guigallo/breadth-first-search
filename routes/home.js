const routesHelper = require('../helper/routesHelper');

module.exports = app => {
  app.route('/')
    .get((req, res) =>
      routesHelper.factoryResponse(res, 200, { message: 'Nothing to show here' }, 'home/index')
    )
}