var router = require('express').Router();

router.use('/events', require('./event-routes'));
//router.use('/user', require('./user-routes'));

module.exports=router;