const express = require('express');
const { createConsumer } = require('../models/consumers.js');

const consumersRouter = express.Router();

consumersRouter.post('/', createConsumer, (req, res) => {
  res.redirect('/');
});

module.exports = consumersRouter;
