const { samplesMock } = require('../../utils/mocks/samplesMock');

class SamplesServices {
  async getSamples() {
    const samples = await Promise.resolve(samplesMock);
    return samples || [];
  }
  async getSample() {
    const samples = await Promise.resolve(samplesMock[0]);
    return samples || [];
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