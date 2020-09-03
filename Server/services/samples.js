const { samplesMock } = require('../../utils/mocks/samplesMock');
var { getAllUsers, getOneUser, createNewUser } = require('./userQueries');

class SamplesServices {
  async getAllUsers() {
    //const samples = await Promise.resolve(somethig.getAllUsers());
    return getAllUsers();
  }
  async getSample(user_id) {
    return getOneUser(user_id);
  }
  async createNewUser() {
    return createNewUser();
  }
  async updateSample() {
    const updateSample = await Promise.resolve(samplesMock[0].id);
    return updateSample;
  }
  async deleteSample() {
    const deleteSample = await Promise.resolve(samplesMock[0].id);
    return deleteSample;
  }
}
module.exports = SamplesServices;
