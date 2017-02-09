const eventRouter = require('express').Router();
const db = require('../models');

// Purpose: to find events that are opening TODAY
var today = new Date(Date());
var date = today.toISOString().split('T')[0];

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
//////////////////////////////////////////////////

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






eventRouter.route('/search')
  
  .get(function (req, res) {
    console.log('data', req.query)
    var store = {};
    if(req.query.zipCode !== '' ) {
      store['zipCode'] = req.query.zipCode
    }

    if(req.query.dateStart !== '') {
     console.log('type of dateStart :' , typeof req.query.dateStart)
     //console.log('')
      store['opening'] = {
        $gte : req.query.dateStart.toDate()
      }
    }
    if(req.query.dateEnd !== '') {
      store['closing'] = {
        $lte : req.query.dateEnd
      }
    }
    if(req.query.type !== '' && req.query.type == 'SearchAll') {
      store['type'] = {
        $in: ['School', 'Museum', 'Gallery']
      }

    } else {
      store['type'] = req.query.type
    }

    db.Event.findAll({
      where:  store,
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

module.exports = eventRouter;
