const db = require('../lib/dbConnect');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const salt = 10;

function createCook(req, res, next) {
  console.log("creating a cook");
  db.none(`INSERT INTO cooks (name, email, username, password, neighborhood, address) Values ($1, $2, $3, $4, $5, $6)`,
    [req.body.name, req.body.email, req.body.username, bcrypt.hashSync(req.body.password, salt), req.body.neighborhood, req.body.address])
  .then(next())
  .catch(error => next(error));
}

function authenticateCook(req, res, next) {
  console.log('Performing user auth (cook)!');
  db.one(`SELECT * FROM cooks WHERE username = $1`, req.body.username)
    .then((data) => {
      console.log(data.password)
      const match = bcrypt.compareSync(req.body.password, data.password);
      if (match) {
        const myToken = jwt.sign({ username: req.body.username }, process.env.SECRET);
        res.status(200).json(myToken);
        console.log('successful sign in');
      } else {
        res.status(500).send('wrong password')
        console.log('wrong password!');
      }
    })
    .catch(error => console.log(error))
}

function getCooks(req, res, next) {
  console.log('Getting all dem cooks.');
  db.any(`SELECT username, name, neighborhood FROM cooks;`)
    .then((cooks) => {
      res.rows = cooks;
      next();
    })
    .catch(error => console.log(error));
}

function getCooksByNeighborhood(req, res, next) {
  console.log('Searching cooks by neighborhood: ', req.body.neighborhood);
  db.any(`SELECT username, name, neighborhood FROM cooks WHERE neighborhood = $1`, req.body.neighborhood)
    .then((cooks) => {
      res.rows = cooks;
      next();
    })
    .catch(error => console.log(error));
}

module.exports = {
  createCook,
  authenticateCook,
  getCooks,
  getCooksByNeighborhood
};
