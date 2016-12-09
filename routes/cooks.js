const express = require('express');
const { createCook, authenticateCook } = require('../models/cooks.js');

const cooksRouter = express.Router();

cooksRouter.post('/', createCook, (req, res) => {
  res.redirect('/');
});

cooksRouter.post('/login', authenticateCook, (req, res, next) => {
  res.json({message: "successfully signed in"});
});

module.exports = cooksRouter;
