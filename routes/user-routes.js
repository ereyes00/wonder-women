const userRouter = require('express').Router();
const db = require('../models');
const session = require('express-session')



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
userRouter.route('/login')
    .post(function(req, res) {
      console.log('Session', req.session)
      db.User.findOne({ 
        where: { email: req.body.email,
                 password: req.body.password 
               }
     })
    .then(function (user) {
       if (user) {
           console.log('Password is correct');
           req.session.email = user.email;
           req.session.userId = user.id;
           req.session.save();
           console.log('updated session', req.session);
           res.send( user.email )
        } else {
          res.status(401).send('Invalid User name or password')
        }
  })
  .catch(function (err) {
    res.status(err);
  })
});

userRouter.route('/get/bookmarks/:id')
// Route to get all events bookmarked by one user
  .get(function(req, res) {
    db.Bookmarks.findAll({
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


module.exports = userRouter;
