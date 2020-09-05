const Userservice = require('../services/usersServices');
const Router = require('express-promise-router');
const router = new Router();
const userservices = new Userservice();

router.get('/all', async function (req, res, next) {
  console.log(`Request List of all`);
  try {
    const users = await userservices.getAllUsers();
    res.status(200).json({
      data: users,
      messages: 'users listed',
    });
  } catch (err) {
    next(err);
  }
});

router.get('/:userID', async function (req, res, next) {
  const { userID } = req.params;
  console.log(`Request_GET_One id:  ${userID}`);
  try {
    const users = await userservices.getUser(userID);
    res.status(200).json({
      data: users,
      messages: 'user retrieved',
    });
  } catch (err) {
    next(err);
  }
});

router.post('/', async function (req, res, next) {
  console.log('Got body:', req.body);
  try {
    const createduser = await userservices.createNewUser(req.body);
    res.status(201).json({
      data: createduser,
      messages: 'users created',
    });
  } catch (err) {
    next(err);
  }
});

router.put('/:userID', async function (req, res, next) {
  const { userID } = req.params;
  const { body: usertoUpDate } = req;
  console.log(`Id_File to updated is ${userID}`);
  console.log(`Request_Body to updated is ${req}`);

  try {
    const userUpdated = await userservices.updateUser(userID, usertoUpDate);
    res.status(200).json({
      data: userUpdated,
      messages: 'user updated',
    });
  } catch (err) {
    next(err);
  }
});

router.delete('/:userID', async function (req, res, next) {
  const { userID } = req.params;
  try {
    const userDeleted = await userservices.deleteUser(userID);
    res.status(200).json({
      data: userDeleted,
      messages: 'user deleted',
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

//@SantiRey
/* comment to knwo 
the first groove strucktur please do not erase.

function usersApi(app) {
app.use('/api/users', router);
  module.exports = router;
  //.. get and post methode..//
}
module.exports = usersApi;*/
//Creating by Santiago Rey
