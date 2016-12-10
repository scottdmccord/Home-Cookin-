const express = require('express');
const { createConsumer, authenticateConsumer } = require('../models/consumers.js');

const consumersRouter = express.Router();

consumersRouter.post('/', createConsumer, (req, res) => {
  res.redirect('/');
});

consumersRouter.post('/login', authenticateConsumer, (req, res, next) => {
  res.json({message: "successfully signed in"});
});

module.exports = consumersRouter;
