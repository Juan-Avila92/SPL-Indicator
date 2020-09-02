//Imports
const express = require('express');
//App aplication instanz
const app = express();

const { config } = require('./config/index');
const samplesApi = require('./routes/samples.js');

//Development

//Router
samplesApi(app);
//Listener
app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});

//Created by Santiago Rey
