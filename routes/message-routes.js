const messageRouter = require('express').Router();
const db = require('../models');

// Route that will be used send messages
// http://localhost:8888/api/message/send
messageRouter.route('/send')
  .post(function (req, res) {
    //console.log("POST MESSAGE REQUEST INFO", req.body)
  db.Message.create({ 
      fullName: req.body.fullName,
      email: req.body.email,
      messageBody: req.body.message,
   })
  .then(function (data) {
    res.send("Thanks for contacting us. We'll get back to you soon!")
  })
  .catch(function (err) {
    res.status(err);
  })
});

module.exports = messageRouter;
