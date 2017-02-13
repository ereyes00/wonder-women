const userRouter = require('express').Router();
const db = require('../models');

userRouter.route('/')
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


module.exports = userRouter;
