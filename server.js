'use strict'
// Only load dotenv if we need it (if we have NODE_ENV in our environment)
const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

// require our packages
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const bcrypt = require('bcryptjs');

// require our routers
const cooksRouter = require('./routes/cooks');
const consumersRouter = require('./routes/consumers');

const app = express();
const PORT = process.argv[2] || process.env.port || 3000;

// log resonse code
app.use(logger(isDev ? 'dev' : 'common'));
// app.use(logger('dev'));

// accept JSON formatted data
app.use(bodyParser.json());

// I followed the tutorial put together by Dan Peace to better understand JWTs
// require secret for all routes except the following:
app.use(expressJWT({secret: process.env.SECRET}).unless({path: ['/', '/favicon.ico', '/css/main.css', '/js/main.js', '/css/main.css.map', '/js/main.js.map', '/cooks', '/login', '/cooks/login', '/consumers', '/consumers/login']}));

// handle the routes
app.use('/cooks', cooksRouter);
app.use('/consumers', consumersRouter);

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
