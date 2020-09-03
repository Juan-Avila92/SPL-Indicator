const { knex } = require('./db');

module.exports.up = function () {
  // Create referenced table before referencing table.
  return knex.schema
    .createTable('users', function (users) {
      users.increments('userID').primary();
      users.string('name');
      users.string('password');
    })
    .createTable('samples', function (samples) {
      samples.increments('sampleID').primary();
      samples.integer('meassurement');
      samples
        .integer('userID')
        .references('userID')
        .inTable('users')
        .notNull()
        .onDelete('cascade');
    })
    .then(() => console.log('table created'))
    .catch((err) => {
      console.log(err);
      throw err;
    })
    .finally(() => {
      knex.destroy();
    });
};

module.exports.down = function () {
  // Reverse order here to prevent error.
  return knex.schema
    .dropTable('samples')
    .dropTable('users')
    .then(() => console.log('tables droped'))
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      knex.destroy();
    });
};
