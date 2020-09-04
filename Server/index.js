//Imports
const express = require('express');
var bodyParser = require('body-parser');
const { config } = require('./config/index');

const routes = require('./routes/routes');

//App aplication instanz
const app = express();

//Development
app.use(bodyParser.json());

//Router
routes(app);

//Listener
app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});

//Created by Santiago Rey
