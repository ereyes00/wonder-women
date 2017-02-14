const eventRouter = require('express').Router();
const db = require('../models');

eventRouter.route('/')
// This route will be used to display all events
  .get(function (req, res) {
    console.log('IN GET events')
    db.Event.findAll({ include: [db.Image, db.Location] })
      .then(function (data) {
        res.send(data);
      });
  })
// This route will be used to create event with image, and hours  
  .post(function (req, res) {
    db.Event.create({
      title: req.body.title,
      opening: req.body.opening,
      closing: req.body.closing,
      price: req.body.price,
      featuredArtist: req.body.featuredArtist,
      description: req.body.description,
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

        // let rawHours = req.body.hours;
        //  for (key in rawHours) {
        //   console.log("key", key);
        //   console.log('would save: ', {
        //     EventId: data.id,
        //     dayOfWeek: key,
        //     openTime: rawHours[key].openTime,
        //     closeTime: rawHours[key].closeTime,
        //   })

          // db.LocationHours.create({
          //   LocationId: data.id,
          //   dayOfWeek: key,
          //   openTime: rawHours[key].openTime,
          //   closeTime: rawHours[key].closeTime,
          //   closed:
          // })
        // };
      }
    })
    .then(function (data) {
      //console.log("After exhibition hours creation", data);
        res.send('Event created');
    })
    .catch(function (err) {
      console.log('in catch handler of event POST', err)
      res.status(500).send(err.message);
    });
  });
  
//This is the route that will be used to display individaul event
eventRouter.route('/:id')
  .get(function (req, res) {
    db.Event.findById(req.params.id, {
      include: [
        db.Image, 
        {model: db.Location,
                include: db.LocationHours}
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

// This route will be used to display all images and only url attribute will avaiable
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

// This is the route that will be used for search bar 
eventRouter.route('/search')

  .get(function (req, res) {
    console.log('data', req.query)
    var store = {};
    if(req.query.zipCode !== '' ) {
      store['zipCode'] = req.query.zipCode
    }

    if(req.query.dateStart !== '') {
     console.log('type of dateStart :' , typeof req.query.dateStart)
     var newdate = new Date(req.query.dateStart)
     console.log('newdate : ' + newdate)
      store['opening'] = {
        $gte : newdate
      }
    }
    if(req.query.dateEnd !== '') {
      store['closing'] = {
        $lte : new Date(req.query.dateEnd)
      }
    }
    if(req.query.type !== '' && req.query.type == 'SearchAll') {
      store['type'] = {
        $in: ['SCHOOL', 'MUSEUM', 'GALLERY']
      }

    } else {
      store['type'] = req.query.type.toUpperCase()
    }

    db.Event.findAll({
      where:  store,
      include: [db.Image],
    })
    .then(function (data) {
      if (data.length === 0) {
        res.send('No record found');
      } else {
        res.send(data);
      }
    });
  });




module.exports = eventRouter;
