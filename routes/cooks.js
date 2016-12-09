const express = require('express');
const { createCook } = require('../models/cooks.js');

const cooksRouter = express.Router();

cooksRouter.post('/', createCook, (req, res) => {
  res.redirect('/');
});

module.exports = cooksRouter;
