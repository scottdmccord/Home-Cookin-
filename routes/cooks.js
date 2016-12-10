const express = require('express');
const { createCook, authenticateCook, getCooks } = require('../models/cooks.js');

const cooksRouter = express.Router();

const sendJSONresp = (req, res) => res.json(res.rows);

cooksRouter.post('/', createCook, (req, res) => {
  res.redirect('/');
});

cooksRouter.post('/login', authenticateCook, (req, res, next) => {
  res.json({message: "successfully signed in"});
});

cooksRouter.get('/displayAll', getCooks, sendJSONresp);

module.exports = cooksRouter;
