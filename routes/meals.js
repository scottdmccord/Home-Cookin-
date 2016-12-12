const express = require('express');
const { createMeal, getMealsByNeighborhood, getUpcomingMealsByCook, bookMeal } = require('../models/meals.js')

const mealsRouter = express.Router();

const sendJSONresp = (req, res) => res.json(res.rows);

mealsRouter.post('/', createMeal, (req, res) => {
  res.redirect('/');
})

mealsRouter.post('/bookMeal', bookMeal, (req, res) => {
  res.redirect('/')
})

mealsRouter.post('/searchNeighborhood', getMealsByNeighborhood, sendJSONresp);
mealsRouter.post('/renderCookMealsUpcoming', getUpcomingMealsByCook, sendJSONresp);

module.exports = mealsRouter;
