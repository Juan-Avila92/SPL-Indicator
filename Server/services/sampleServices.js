// posible use for other propouses
//const { samplesMock } = require('../../utils/mocks/samplesMock');
var {
    createNewSample,
  } = require('./sampleQueries');
  
  class SamplesServices {
    async createNewSample(body) {
      return createNewSample(body) || [];
    }
  }
  module.exports = SamplesServices;