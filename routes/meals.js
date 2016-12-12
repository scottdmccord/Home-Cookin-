const express = require('express');
const { createMeal, getMealsByNeighborhood } = require('../models/meals.js')

const mealsRouter = express.Router();

const sendJSONresp = (req, res) => res.json(res.rows);

mealsRouter.post('/', createMeal, (req, res) => {
  res.redirect('/');
})

mealsRouter.post('/searchNeighborhood', getMealsByNeighborhood, sendJSONresp);

module.exports = mealsRouter;
