const SamplesService = require('../services/samples');
const Router = require('express-promise-router');

function samplesApi(app) {
  const router = new Router();
  app.use('/api/samples', router);

  const samplesServices = new SamplesService();

  // export our router to be mounted by the parent application
  module.exports = router;
  //

  router.get('/all', async function (req, res, next) {
    console.log(`Request List of all`);
    try {
      const samples = await samplesServices.getAllUsers();
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
      const samples = await samplesServices.getSample(sampleID);
      res.status(200).json({
        data: samples,
        messages: 'sample retrieved',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function (req, res, next) {
    console.log('Got body:', req.body);
    try {
      const createdSample = await samplesServices.createNewUser();
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
