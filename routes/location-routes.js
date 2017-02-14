const locationRouter = require('express').Router();
const db = require('../models');

locationRouter.route('/')
// This route will be used to display all locations
  .get(function (req, res) {
    console.log('IN GET locations')
    db.Location.findAll({ include: [ db.LocationHours] })
      .then(function (data) {
        res.send(data);
      });
  })
// This route will be used to create a location with hours  
  .post(function (req, res) {
    db.Location.create({
      UserId: req.body.userId,
      location: req.body.location,
      phoneNumber: req.body.phoneNumber,
      streetAddress: req.body.streetAddress,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      type: req.body.type,
      hours:req.body.hours
    })
    .catch(function (err) {
      console.log('After first section in catch handler of event POST', err)
    })
    .then(function (data) {
      if (data) {
         for (key in hours) {
          db.LocationHours.create({
            LocationId: data.id,
            dayOfWeek: key,
            openTime: hours[key].openTime,
            closeTime: hours[key].closeTime,
            closed: hours[key].closed,
          })
        };
      }
    })
    .then(function (data) {
      //console.log("After elocation hours creation", data);
        res.send('Location created');
    })
    .catch(function (err) {
      console.log('in catch handler of event POST', err)
      res.status(500).send(err.message);
    });
  });
  
//This is the route that will be used to display individual location
locationRouter.route('/:id')
  .get(function (req, res) {
    db.Location.findById(req.params.id, {
      include: [
        db.LocationHours
      ],
    })
      .then(function (data) {
        if (!data) {
          res.send('no record found');
        } else {
          res.send(data);
        }
      });
  });

module.exports = locationRouter;
