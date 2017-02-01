var eventRouter = require('express').Router();
var db = require('../models');


eventRouter.route('/')
      .get(function(req, res){
        db.Event.findAll()
        .then(function(data) {
          res.send(data)
        })
        
});



module.exports = eventRouter