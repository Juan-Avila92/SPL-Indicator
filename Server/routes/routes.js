const userApi = require('./usersRoutes');

const routes = function appApis(app) {
  app.use('/api/users', userApi);
  //TODO @Juan-Avila92 userApi need to be change for samples api
  app.use('/api/samples', userApi);
};

module.exports = routes;
