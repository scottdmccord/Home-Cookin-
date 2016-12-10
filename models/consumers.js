const db = require('../lib/dbConnect');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const salt = 10;

function createConsumer(req, res, next) {
  console.log("creating a consumer");
  db.none(`INSERT INTO consumers (name, email, username, password) Values ($1, $2, $3, $4)`, [req.body.name, req.body.email, req.body.username, req.body.password])
  .then(next())
  .catch(error => next(error));
}

function authenticateConsumer(req, res, next) {
  console.log('Performing user auth (consumer)!');
  db.one(`SELECT * FROM consumers WHERE username = $1`, req.body.username)
    .then((data) => {
      console.log(data.password)
      const match = bcrypt.compareSync(req.body.password, data.password);
      if (match) {
        const myToken = jwt.sign({ username: req.body.username }, process.env.SECRET);
        res.status(200).json(myToken);
        console.log('successful sign in');
      } else {
        res.status(500).send('wrong password');
        console.log('wrong password');
      }
    )}
    .catch(error => console.log(error));
}

module.exports = {
  createConsumer,
  authenticateConsumer
}
