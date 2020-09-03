const Userservice = require('../services/usersServices');
const Router = require('express-promise-router');

function samplesApi(app) {
  const router = new Router();
  app.use('/api/samples', router);

  const userservices = new Userservice();

  // export our router to be mounted by the parent application
  module.exports = router;

  router.get('/all', async function (req, res, next) {
    console.log(`Request List of all`);
    try {
      const samples = await userservices.getAllUsers();
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
      const samples = await userservices.getSample(sampleID);
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
      const createdSample = await userservices.createNewUser(req.body);
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
      const sampleUpdated = await userservices.updateUser(
        sampleID,
        sampletoUpDate
      );
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
      const sampleDeleted = await userservices.deleteUser(sampleID);
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

//Creating by Santiago Rey
