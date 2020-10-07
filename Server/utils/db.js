const { config } = require('../config/index');

var knex = require('knex')({
  client: 'pg',
  version: '12.3',
  connection: {
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
  },
});
console.log(knex);
console.log(config);
module.exports = {
  knex,
};