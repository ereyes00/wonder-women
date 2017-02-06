const eventRouter = require('express').Router();
const db = require('../models');


eventRouter.route('/')

  .get(function (req, res) {
    db.Event.findAll({ include: [db.Image, db.ExhibitionHours] })
      .then(function (data) {
        res.send(data);
      });
  })
  .post(function (req, res) {
    db.Event.create({
      title: req.body.title,
      location: req.body.location,
      opening: req.body.opening,
      closing: req.body.closing,
      hours: req.body.hours,
      price: req.body.price,
      featuredArtist: req.body.featuredArtist,
      description: req.body.description,
      streetAddress: req.body.address,
      city: req.body.city,
      zipCode: req.body.zipCode,
      type: req.body.type,
    })
    .then(function (data) {
      if (data) {
        db.Image.create({
          EventId: data.id,
          title: req.body.titles,
          url: req.body.image,
        });
        res.send('Event created');
      }
    })
    .catch(function (err) {
      res.send(err.message);
    });
  });

eventRouter.route('/:id')
  .get(function (req, res) {
    db.Event.findById(req.params.id, {
      include: [db.Image, db.ExhibitionHours],
    })
      .then(function (data) {
        if (!data) {
          res.send('no record found');
        } else {
          res.send(data);
        }
      });
  });


eventRouter.route('/zip/:zip')
  .get(function (req, res) {
    db.Event.findAll({
      where: {
        zipCode: req.params.zip,
      },
      include: [db.Image, db.ExhibitionHours],
    })
    .then(function (data) {
      if (data.length === 0) {
        res.send('Nothing found');
      } else {
        res.send(data);
      }
    });
  });


module.exports = eventRouter;
