//Imports
const express = require('express');
var bodyParser = require('body-parser');

//App aplication instanz
const app = express();

const { config } = require('./config/index');
const usersApi = require('./routes/usersRoutes.js');

//Development
app.use(bodyParser.json());
//Router
usersApi(app);
//Listener
app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});

//Created by Santiago Rey
