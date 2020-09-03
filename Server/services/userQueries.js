const { knex } = require('../utils/db');
//@SantiRey it is possible usefull
//const { v4 } = require('uuid');  const id = v4();

function getAllUsers() {
  return knex
    .select()
    .table('users')
    .then(function (user) {
      console.log(user);
      return user;
    });
}

function getOneUser(id) {
  console.log(id);
  return knex
    .select()
    .from('users')
    .where({ userID: id })
    .then(function (user) {
      console.log(user);
      return user;
    });
}

function createNewUser(body) {
  return knex.insert(body).into('users').returning('*');
}

function updateUser(id, body) {
  return knex.update(body).from('users').where({ userID: id });
}

function deleteUser(id) {
  return knex.delete().from('users').where({ userID: id });
}

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  deleteUser,
  updateUser,
};
//Creating by Santiago Rey
