const { knex } = require('../utils/db');
//@SantiRey it is possible usefull
//const { v4 } = require('uuid');  const id = v4();
function createNewSample(body) {
  return knex.insert(body).into('samples').returning('*');
}

module.exports = {
  createNewSample,
};
