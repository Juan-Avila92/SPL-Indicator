const userApi = require('./usersRoutes');
const sampleApi = require('./sampleRoutes');

const routes = function appApis(app) {
  app.use('/api/samples', sampleApi);
  app.use('./api/users', userApi)
};

module.exports = routes;

