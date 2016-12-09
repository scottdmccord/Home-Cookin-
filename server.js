'use strict'
// Only load dotenv if we need it (if we have NODE_ENV in our environment)
const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

// require our packages
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

// require our routers
const cooksRouter = require('./routes/cooks');

const app = express();
const PORT = process.argv[2] || process.env.port || 3000;

// log resonse code
app.use(logger(isDev ? 'dev' : 'common'));
// app.use(logger('dev'));

// accept JSON formatted data
app.use(bodyParser.json());

// handle the routes
app.use('/cooks', cooksRouter);

// add an error handler
app.use((err, req, res, next) => {
  console.error(err, next);
  res.status(500).send('Something broke!');
});

app.use(express.static(path.join(__dirname, 'dist')));

// to make react router work with browser history:
// http://stackoverflow.com/questions/35063095/react-router-browserhistory-not-working-as-expected
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

// start server
app.listen(PORT);
