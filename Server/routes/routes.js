const userApi = require('./usersRoutes');

const routes = function usersApi(app) {
  app.use('/api/users', userApi);
};

module.exports = routes;
