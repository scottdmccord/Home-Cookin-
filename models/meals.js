const db = require('../lib/dbConnect');

function createMeal(req, res, next) {
  db.none(`INSERT INTO meals (cuisine_type, ingredients, description, quantity, pickup_day, pickup_time, price, cook_id, counter) Values ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
    [req.body.cuisine_type, req.body.ingredients, req.body.description, req.body.quantity, req.body.pickup_day, req.body.pickup_time, req.body.price, req.body.cook_id, req.body.quantity])
    .then(next())
    .catch(error => next(error));
}

function getMealsByNeighborhood(req, res, next) {
  db.any(`SELECT meals.cuisine_type, meals.ingredients, meals.description, cooks.name, cooks.id, cooks.neighborhood, meals.counter
          FROM meals
          INNER JOIN cooks
          on meals.cook_id = cooks.id
          WHERE cooks.neighborhood = $1;`, req.body.neighborhood)
    .then((meals) => {
      res.rows = meals;
      next();
    })
    .catch(error => console.log(error));
}

function getUpcomingMealsByCook(req, res, next) {
  db.any(`SELECT * FROM meals WHERE cook_id = $1 AND pickup_day >= CURRENT_DATE;`, req.body.cookID)
  .then((meals) => {
    res.rows = meals;
    next();
  })
  .catch(error => console.log(error));
}

module.exports = {
  createMeal,
  getMealsByNeighborhood,
  getUpcomingMealsByCook
}
