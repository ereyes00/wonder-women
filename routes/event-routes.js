var eventRouter = require('express').Router();
var db = require('../models');


eventRouter.route('/')
      .get(function(req, res){
        db.Event.findAll()
        .then(function(data) {
          res.send(data)
        })
        
})
.post(function(req, res){
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
		type: req.body.type
	})
	    .then(function(data){
	    	res.send('Event created')
	    })
});


eventRouter.route('/:id')
      .get(function(req, res){
      	db.Event.findById(req.params.id)
          .then(function(data){
      	res.send(data)
      })
});

eventRouter.route('/zip/:zip')
    .get(function(req, res){
        db.Event.findAll({
			where: {
				zipCode: req.params.zip
			}
        })
    	.then(function(data){
    		if (data.length === 0) {
    			res.send("nothing found")
    		} else {
    			res.send(data)
    		}
    	})

});








module.exports = eventRouter