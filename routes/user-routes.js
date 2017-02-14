const userRouter = require('express').Router();
const db = require('../models');

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

function validPassword(user, password) {
  return true;
}

userRouter.route('/')
// Route to make a user
  .post(function(req, res) {
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      zipCode: req.body.zipCode,
      role: req.body.role,
    })
    .then(function (data) {
        res.send('User created');
    })
    .catch(function (err) {
      console.log('in catch handler of user POST', err)
      res.status(500).send(err.message);
    });
  });

userRouter.route('/:id')
// Route to get a user by id
  .get(function(req, res) {
    db.User.findById(req.params.id)
    .then(function (data) {
      res.send(data)
    })
    .catch(function (err) {
      res.status(500).send(err.message);
    })
  });

userRouter.route('/createdBy/:id')
// Route to get all events created by one user
  .get(function(req, res) {
    db.Event.findAll({
      where: {
        UserId : req.params.id
      },
    })
    .then(function (data) {
      res.send(data)
    })
    .catch(function (err) {
      res.status(500).send(err.message);
    })
  });

// Route that will be used to confirm login
userRouter.post('/login', function(req, res) {
  db.User.findOne({ 
    where: { email: req.email }
  }).then(user) {
    if (!user) {
      res.status(401);
    }
    if (!validPassword(req.email, req.password)) {
      res.status(401);
    }
    res.json({user: req.user});
  })
  .catch(err) {
    done(err);
  }
});

module.exports = userRouter;
