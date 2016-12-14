const db = require('../lib/dbConnect');

// creates a meal based on cook user's input
function createMeal(req, res, next) {
  db.none(`INSERT INTO meals (cuisine_type, ingredients, description, quantity, pickup_day, pickup_time, price, cook_id, counter) Values ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
    [req.body.cuisine_type, req.body.ingredients, req.body.description, req.body.quantity, req.body.pickup_day, req.body.pickup_time, req.body.price, req.body.cook_id, req.body.quantity])
    .then(next())
    .catch(error => next(error));
}

// get all meals still available in the queried neighborhood
function getMealsByNeighborhood(req, res, next) {
  db.any(`SELECT meals.cuisine_type, meals.ingredients, meals.description, cooks.name, cooks.id, cooks.neighborhood, meals.counter, meals.id, meals.pickup_day, meals.pickup_time
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

// render all meals made by a single cook user
function getUpcomingMealsByCook(req, res, next) {
  db.any(`SELECT * FROM meals WHERE cook_id = $1 AND pickup_day >= CURRENT_DATE;`, req.body.cookID)
  .then((meals) => {
    res.rows = meals;
    next();
  })
  .catch(error => console.log(error));
}

// render all meals booked by a single consumer user
function getUpcomingMealsByConsumer(req, res, next) {
  console.log('pulling consumer meals');
  db.any(`SELECT meal_counter.id, meal_counter.meal_id, meals.cuisine_type, meals.description, meals.pickup_day, meals.pickup_time, meals.price
          FROM meal_counter
          INNER JOIN meals
          ON meal_counter.meal_id = meals.id
          WHERE meal_counter.consumer_id = $1`, req.body.consumerID)
    .then((meals) => {
      res.rows = meals;
      next();
    })
    .catch(error => console.log(error));
}

// save a meal to a consumer user's "booked" list
function bookMeal(req, res, next) {
  console.log("Inserting meal!");
  db.none(`INSERT INTO meal_counter (meal_id, consumer_id) VALUES ($1, $2)`, [req.body.meal_id, req.body.consumer_id])
    .then(next())
    .catch(error => next(error));
}

// remove a meal from a consumer user's "booked" list
function unbookMeal(req, res, next) {
  console.log('this is the param: ', req.params)
  console.log("removing meal");
  db.none(`DELETE FROM meal_counter where id = $1;`, req.params.id)
    .then(next())
    .catch(err => next(err));
}

module.exports = {
  createMeal,
  getMealsByNeighborhood,
  getUpcomingMealsByCook,
  getUpcomingMealsByConsumer,
  bookMeal,
  unbookMeal
}
