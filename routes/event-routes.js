const eventRouter = require('express').Router();
const db = require('../models');


eventRouter.route('/')

  .get(function (req, res) {
    console.log('IN GET events')
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
      price: req.body.price,
      featuredArtist: req.body.featuredArtist,
      description: req.body.description,
      streetAddress: req.body.streetAddress,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      type: req.body.type,
    })
    .catch(function (err) {
      console.log('After first section in catch handler of event POST', err)
    })
    .then(function (data) {
      if (data) {
        db.Image.create({
          EventId: data.id,
          title: req.body.titles,
          url: req.body.image,
        });

        let rawHours = req.body.hours;

         for (key in rawHours) {
        //   console.log("key", key);
        //   console.log('would save: ', {
        //     EventId: data.id,
        //     dayOfWeek: key,
        //     openTime: rawHours[key].openTime,
        //     closeTime: rawHours[key].closeTime,
        //   })

          db.ExhibitionHours.create({
            EventId: data.id,
            dayOfWeek: key,
            openTime: rawHours[key].openTime,
            closeTime: rawHours[key].closeTime,
          })
        };
      }
    })
    .then(function (data) {
      console.log("After exhibition hours creation", data);
        res.send('Event created');
    })
    .catch(function (err) {
      console.log('in catch handler of event POST', err)
      res.status(500).send(err.message);
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
