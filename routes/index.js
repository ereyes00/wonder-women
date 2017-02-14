const router = require('express').Router();

router.use('/event', require('./event-routes'));
router.use('/user', require('./user-routes'));

module.exports = router;
