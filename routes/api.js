var router = require('express').Router();
var db = require('../models');


router.route('/events')
      .get(function(req, res){
      	db.Event.findAll()
      	.then(function(data) {
      		res.send(data)
      	})
      	
});
router.route('/events/:id')
      .get(function(req, res){
      	db.Event.findById(req.params.id)
          .then(function(data){
      	res.send(data)
      })
})
module.exports = router


