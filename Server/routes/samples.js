const SamplesService = require('../services/samples');
//const db = require('../utils/db');
const Router = require('express-promise-router');

function samplesApi(app) {
  const router = new Router();
  //use(home:route)
  app.use('/api/samples', router);
  const samplesServices = new SamplesService();

  // export our router to be mounted by the parent application
  module.exports = router;

  router.get('/', async function (req, res, next) {
    const { tag } = req.query;
    console.log(`Request List of all: ${tag}`);
    try {
      const samples = await samplesServices.getSamples({ tag });
      res.status(200).json({
        data: samples,
        messages: 'samples listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:sampleID', async function (req, res, next) {
    const { sampleID } = req.params;
    console.log(`Request_GET_One id:  ${sampleID}`);
    try {
      const samples = await samplesServices.getSample({ sampleID });
      res.status(200).json({
        data: samples,
        messages: 'sample retrieved',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function (req, res, next) {
    const { body: sample } = req;
    console.log(`File to created is ${sample.key}`);
    try {
      const createdSample = await samplesServices.createSample({ sample });
      res.status(201).json({
        data: createdSample,
        messages: 'samples created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:sampleID', async function (req, res, next) {
    const { sampleID } = req.params;
    const { body: sampletoUpDate } = req;
    console.log(`Id_File to updated is ${sampleID}`);
    console.log(`Request_Body to updated is ${req}`);

    try {
      const sampleUpdated = await samplesServices.updateSample({
        sampleID,
        sampletoUpDate,
      });
      res.status(200).json({
        data: sampleUpdated,
        messages: 'sample updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:sampleID', async function (req, res, next) {
    const { sampleID } = req.params;
    try {
      const sampleDeleted = await samplesServices.deleteSample({ sampleID });
      res.status(200).json({
        data: sampleDeleted,
        messages: 'sample deleted',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = samplesApi;
