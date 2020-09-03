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

function createNewUser() {
  const user = { name: 'pruebe' };
  return knex.insert(user).into('users').returning('*');
}

module.exports = { getAllUsers, getOneUser, createNewUser };
