const { knex } = require('./db');

knex.schema
  .createTableIfNotExists('pruebe', (table) => {
    table.increments('id');
    table.string('name');
    table.integer('price');
  })
  .then(() => console.log('table created'))
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
