const express = require('express');

const app = express();

const { config } = require('./config/index');

app.get('/', function (req, res) {
  res.send('HELLO WORLD!!');
});

app.get('/json', function (req, res) {
  res.json('HELLO WORLD');
});

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});

//Created by Santiago Rey
