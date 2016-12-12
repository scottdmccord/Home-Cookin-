const express = require('express');
const { createConsumer, authenticateConsumer, getConsumerDashboard } = require('../models/consumers.js');

const consumersRouter = express.Router();

const sendJSONresp = (req, res) => res.json(res.rows);

consumersRouter.post('/', createConsumer, (req, res) => {
  res.redirect('/');
});

consumersRouter.post('/login', authenticateConsumer, (req, res, next) => {
  res.json({message: "successfully signed in"});
});

consumersRouter.post('/consumerDashboard', getConsumerDashboard, sendJSONresp);

module.exports = consumersRouter;
