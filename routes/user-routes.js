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
      role: req.body.role, // has to be included on front end
    })
  })


module.exports = userRouter;
