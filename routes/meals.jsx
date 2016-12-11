const express = require('express');

const mealsRouter = express.Router();

mealsRouter.post('/', createMeal, (req, res) => {
  res.redirect('/');
})

module.exports = mealsRouter;
