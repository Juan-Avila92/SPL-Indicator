const { knex } = require('../utils/db');

function getAllUsers() {
  return knex
    .select()
    .from('users')
    .then(function (user) {
      console.log(user);
      return user;
    });
}

function getOneUser(id) {
  var id_number = Number(id);
  console.log(id_number);
  return knex
    .select()
    .from('users')
    .where({ user_id: id_number })
    .then(function (user) {
      console.log(user);
      return user;
    });
}

module.exports = { getAllUsers, getOneUser };
