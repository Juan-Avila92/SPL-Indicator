// posible use for other propouses
//const { samplesMock } = require('../../utils/mocks/samplesMock');
var {
  getAllUsers,
  getOneUser,
  createNewUser,
  deleteUser,
  updateUser,
} = require('./userQueries');

class SamplesServices {
  async getAllUsers() {
    return getAllUsers() || [];
  }
  async getUser(user_id) {
    return getOneUser(user_id) || [];
  }
  async createNewUser(body) {
    return createNewUser(body) || [];
  }
  async updateUser(id, body) {
    return updateUser(id, body) || [];
  }
  async deleteUser(id) {
    return deleteUser(id) || [];
  }
}
module.exports = SamplesServices;

//Creating by Santiago Rey
