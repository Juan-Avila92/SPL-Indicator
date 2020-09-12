const Sampleservice = require('../services/sampleServices');
const Router = require('express-promise-router');
const router = new Router();
const sampleServices = new Sampleservice();

router.post('/sample', async function (req, res, next) {
    console.log('Got body:', req.body);
    try {
      const createdSample = await sampleServices.createNewUser(req.body);
      res.status(201).json({
        data: createdSample,
        messages: 'sample created',
      });
    } catch (err) {
      next(err);
    }
  });