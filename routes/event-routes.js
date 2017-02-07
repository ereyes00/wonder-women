const eventRouter = require('express').Router();
const db = require('../models');

var today = new Date(Date());
var date = today.toISOString().split('T')[0];

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
      streetAddress: req.body.streetAddress,
      city: req.body.city,
      state: req.body.state,
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

eventRouter.route('/images')

  .get(function(req, res){
    db.Image.findAll({
      attributes: [ 'url' ]
    })
      .then(function (data){
        res.send(data)
      })
      .catch(function (err){
        res.send('no record found');
      })
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

eventRouter.route('/price/:price')
  .get(function (req, res) {
    db.Event.findAll({
      where: {
        price: { $like: '$' + req.params.price,
                 $eq: req.params.price
                }
      },
      include: [db.Image, db.ExhibitionHours]
    })
    .then(function (data) {
      if ( data.length === 0 ) { 
        console.log('data :' , data);
        res.send("Nothing found")
     } else { res.send(data);
     }
    });
    
  }); 

eventRouter.route('/date/opening')
  .get(function(req, res) {
    db.Event.findAll({
      where: {
        opening: date
      },
      include: [db.Image]
    })
    .then(function(data) {
      console.log('openingToday', data.title)
      res.send(data)
    })
    .catch(function(err) {
      res.send(err)
    })
  })

eventRouter.route('/date/:date')
  .get(function (req, res) {
    db.Event.findAll({
      where: {
        opening: {
            $gte: req.params.date,
          }
      }

    })
    .then(function (data) {
      console.log('title', data.title)
      res.send(data)
    })
    .catch(function (err) {
      res.send(err)
    })
  })

module.exports = eventRouter;
