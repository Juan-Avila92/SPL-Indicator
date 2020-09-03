const { knex } = require('../utils/db');

class QueriesBuilder {
  async getAllUsers() {
    knex
      .select()
      .from('users')
      .then(function (user) {
        console.log(user);
        return user;
      });
  }
}
module.exports = QueriesBuilder;
