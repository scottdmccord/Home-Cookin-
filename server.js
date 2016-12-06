'use strict'

// require our packages
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

// const homeRoute = require('./routes/index.js')

// Only load dotenv if we need it (if we have NODE_ENV in our environment)
const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

const app = express();
const PORT = process.argv[2] || process.env.port || 3009;

// log resonse code
app.use(logger(isDev ? 'dev' : 'common'));

// accept JSON formatted data
app.use(bodyParser.json());

// handle the routes
// app.use('/', homeRoute);

// add an error handler
app.use((err, req, res, next) => {
  console.error(err, next);
  res.status(500).send('Something broke!');
});

app.use(express.static(path.join(__dirname, 'dist')));

// start server
app.listen(PORT);
