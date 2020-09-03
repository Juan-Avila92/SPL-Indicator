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
    return getAllUsers();
  }
  async getSample(user_id) {
    return getOneUser(user_id);
  }
  async createNewUser() {
    return createNewUser();
  }
  async updateUser(id, body) {
    return updateUser(id, body);
  }
  async deleteUser(id) {
    return deleteUser(id);
  }
}
module.exports = SamplesServices;
