var {
    createNewSample,
    getAllSamples,
  } = require('./sampleQueries');
  
  class SamplesServices {
    async createNewSample(body) {
      return createNewSample(body) || [];
    }

    async getAllSamples() {
      return getAllSamples() || [];
    }
  }
  module.exports = SamplesServices;