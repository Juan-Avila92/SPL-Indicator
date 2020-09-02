const express = require('express');
const { samplesMock } = require('../../utils/mocks/samplesMock');

function samplesApi(app) {
  const router = express.Router();
  //use(home:route)
  app.use('/api/samples', router);

  router.get('/', async function (req, res, next) {
    try {
      const samples = await Promise.resolve(samplesMock);
      res.status(200).json({
        data: samples,
        messages: 'samples listed',
      });
    } catch (err) {
      next(err);
    }
  });
  router.get('/:sampleID', async function (req, res, next) {
    try {
      const samples = await Promise.resolve(samplesMock[0]);
      res.status(200).json({
        data: samples,
        messages: 'sample retrieved',
      });
    } catch (err) {
      next(err);
    }
  });
  router.post('/', async function (req, res, next) {
    try {
      const createdMovie = await Promise.resolve(samplesMock[0].id);
      res.status(201).json({
        data: createdMovie,
        messages: 'samples created',
      });
    } catch (err) {
      next(err);
    }
  });
  router.put('/:sampleID', async function (req, res, next) {
    try {
      const sampleUpdated = await Promise.resolve(samplesMock[0].id);
      res.status(200).json({
        data: sampleUpdated,
        messages: 'sample updated',
      });
    } catch (err) {
      next(err);
    }
  });
  router.delete('/:sampleID', async function (req, res, next) {
    try {
      const sampleDeleted = await Promise.resolve(samplesMock[0].id);
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
