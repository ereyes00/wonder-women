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
    .then((user) => {
      req.session.email = user.email;
      req.session.userId = user.id;
      req.session.save()
      res.status(200).send(user)
    })
    .catch(function (err) {
      console.log('in catch handler of user POST', err)
      res.status(500).send(err.message);
    });
  });
  

userRouter.route('/:id')
// Route to get a user by id
  .get(function(req, res) {
    db.User.findById(req.session.userId)
    .then(function (data) {
      res.send(data)
    })
    .catch(function (err) {
      res.status(500).send(err.message);
    })
  });

//Salina added: Route for user to create events (from account page)
userRouter.route('/:id/createEvent')
  .post(function(req, res) {
    db.User.findById(req.session.userId)
    .then(() => {
      db.Event.create(req.body)
    })
    .catch((err) => {
      console.log('error in user event creating', err)
    })
    .then((data) => {
      if(data) {
        db.Image.create({
          EventId: data.id,
          title: req.body.titles,
          url: req.body.image
        })
      }
    })
    .then((event) => {
      res.send(event)
    })
    .catch((err) => {
      console.log('Post error', err)
      res.status(500).send(err.message)
    })
  })

//Salina added: Route for user to get all their created events on account page
userRouter.route('/:id/createdEvents')
  .get(function(req, res) {
    // db.User.findById(req.session.userId)
    // .then((data)=> {
    //   console.log('data from session', data)
    db.Event.findAll({
      where: {UserId: req.session.userId}
    })
    .then((events) => {
      console.log(events)
      res.send(events)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
  })

// userRouter.route('/:id/bookmarks')
// // Route to get all events bookmarked by one user
//   .get(function(req, res) {
//     db.Bookmark.findAll({
//       where: {UserId: req.session.userId}
//     })
//     // .then(function (user) {
//     //   return user.getBookmark({include:[db.Image, db.Location]});
//     // })
//     .then(function (bookmarks) {
//       console.log('bookmarks', bookmarks)
//       res.send(bookmarks);
//     })
//     .catch(function (err) {
//       res.status(500).send(err.message);
//     })
//   });

  userRouter.route('/:id/bookmarks')
// Route to get all events bookmarked by one user
  .get(function(req, res) {
    db.User.findById(req.params.id)
    .then(function (user) {
      return user.getBookmark({include:[db.Image, db.Location]});
    })
    .then(function (bookmarks) {
      res.send(bookmarks);
    })
    .catch(function (err) {
      res.status(500).send(err.message);
    })
  });

// userRouter.route('/createdBy/:id')
// // Route to get all events created by one user
//   .get(function(req, res) {
//     db.Event.findAll({
//       where: {
//         UserId : req.params.id
//       },
//     })
//     .then(function (data) {
//       res.send(data)
//     })
//     .catch(function (err) {
//       res.status(500).send(err.message);
//     })
//   });

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

           var retVal = {email: user.email, firstName: user.firstName, lastName: user.lastName, id: user.id}

           res.send( retVal )

        } else {
          res.status(401).send('Invalid credentials. Please try again or sign up.')
        }
  })
  .catch(function (err) {
    res.status(err);
  })
});




module.exports = userRouter;
