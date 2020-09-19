const userApi = require('./usersRoutes');
const samples = require('./sampleRoutes');

const routes = function splApi(app) {
  app.use('/api/users', userApi);
  app.use('/api/samples', samples);
};

module.exports = routes;

