const eventRouter = require('express').Router();
const db = require('../models');
var moment = require('moment');


// This is the route that will be used for search bar 
eventRouter.route('/search')
  
  .get(function (req, res) {
    console.log('data from the front end', req.query)
    var storeEvent = {};
    var storeLocation = {}

    if(req.query.zipCode !== '' ) {
      storeLocation['zipCode'] = req.query.zipCode
    }

    if(req.query.dateStart !== '') {
     console.log('type of dateStart :' , typeof req.query.dateStart)
     var newStartDate = new Date(req.query.dateStart)
     console.log('new Start date : ' + newStartDate)
     console.log('Type of new statrt date for comparison', newStartDate)
      storeEvent['opening'] = {
        $lte : newStartDate
      }
    }

    if(req.query.dateEnd !== '') {
      console.log('type of dateEnd :', typeof req.query.dateEnd);
      var newEndDate = new Date(req.query.dateEnd)
      console.log('Type of new End date for comparison', newEndDate)
      storeEvent['closing'] = {

        $lte : newEndDate

      }
    }
    if(req.query.type !== '' && req.query.type == 'SearchAll') {
      storeLocation['type'] = {
        $in: ['SCHOOL', 'MUSEUM', 'GALLERY']
      }

    } else {
      storeLocation['type'] = req.query.type.toUpperCase()
    }
    console.log('Data inside the storeLocation object', storeLocation )
    
    db.Event.findAll({
       where: storeEvent,     
      include: [db.Image, {model: db.Location, where: storeLocation}]
    })
    .then(function (data) {
      if (data.length === 0) {
        res.send('No record found');
      } else {
        
        res.send(data);
      }
    });
  });


eventRouter.route('/')
// This route will be used to display all events
  .get(function (req, res) {
    console.log('IN GET events')
    db.Event.findAll({ include: [db.Image, db.Location] })
      .then(function (data) {
        res.send(data);
      });
  })
// This route will be used to create event with image  
  .post(function (req, res) {
    db.Event.create({
      //UserId: req.body.userId,
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
          title: req.body.imageTitle,
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
  }) //Route to delete an event
  .delete(function(req,res) {
    db.Event.findById(req.params.id)
    .then(function(data) {
      data.destroy();
      res.send("Event deleted!")
    })
  });


// Purpose: to find events that are opening TODAY
var today = new Date(Date());
var date = today.toISOString().split('-', 1)[0];

eventRouter.route('/date/opening')
  .get(function(req, res) {
    db.Event.findAll({
      where: {
         opening: {
            $between: ["2017-02-01", "2017-02-28"]
         }
       },
       include: [
          db.Image,
          {model: db.Location}
       ]
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

eventRouter.route('/add/bookmark/:eventId/:userId')
// Route to add a bookmark
  .get(function(req, res) {
    // const user = req.user.id;
    console.log(typeof(req.params.userId));
    db.User.findById(req.params.userId)
    .then(function(data) {
      data.addBookmark(req.params.eventId)
    })
    .then(function (data){
        res.send("Event bookmarked!")
      })
      .catch(function (err){
        res.status(500).send(err.message);
      })
  })

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



module.exports = eventRouter;
