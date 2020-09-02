const express = require('express');
const MoviesService = require('../services/samples');

function samplesApi(app) {
  const router = express.Router();
  //use(home:route)
  app.use('/api/samples', router);
  const samplesServices = new MoviesService();
  router.get('/', async function (req, res, next) {
    try {
      const samples = await samplesServices.getSamples();
      res.status(200).json({
        data: samples,
        messages: 'samples listed',
      });
    } catch (err) {
      next(err);
    }
  });
  router.get('/:sampleID', async function (req, res, next) {
    const { sampleID } = req.query;
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
    try {
      const createdSample = await samplesServices.createSample();
      res.status(201).json({
        data: createdSample,
        messages: 'samples created',
      });
    } catch (err) {
      next(err);
    }
  });
  router.put('/:sampleID', async function (req, res, next) {
    const { sampleID } = req.query;
    try {
      const sampleUpdated = await samplesServices.updateSample({ sampleID });
      res.status(200).json({
        data: sampleUpdated,
        messages: 'sample updated',
      });
    } catch (err) {
      next(err);
    }
  });
  router.delete('/:sampleID', async function (req, res, next) {
    const { sampleID } = req.query;
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
