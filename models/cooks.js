const db = require('../lib/dbConnect');

function createCook(req, res, next) {
  console.log("creating a cook");
  db.none(`INSERT INTO cooks (name, email, username, password, neighborhood, address) Values ($1, $2, $3, $4, $5, $6)`, [req.body.name, req.body.email, req.body.username, req.body.password, req.body.neighborhood, req.body.address])
  .then(next())
  .catch(error => next(error));
}

module.exports = {
  createCook
};
