const { samplesMock } = require('../../utils/mocks/samplesMock');
var { getAllUsers, getOneUser } = require('./queriesBuilder');

class SamplesServices {
  async getSamples() {
    //const samples = await Promise.resolve(somethig.getAllUsers());
    return getAllUsers();
  }
  async getSample(user_id) {
    return getOneUser(user_id);
  }
  async createSample() {
    const createSample = await Promise.resolve(samplesMock[0].id);
    return createSample;
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
