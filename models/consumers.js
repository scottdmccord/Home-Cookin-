const db = require('../lib/dbConnect');

function createConsumer(req, res, next) {
  console.log("creating a consumer");
  db.none(`INSERT INTO consumers (name, email, username, password) Values ($1, $2, $3, $4)`, [req.body.name, req.body.email, req.body.username, req.body.password])
  .then(next())
  .catch(error => next(error));
}

module.exports = {
  createConsumer
}
