const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy
const Sequelize = require('sequelize');
var session = require('express-session')
var db = require('../models')
var router = require('../routes/index.js')
// var accountSid = 'ACc1141fe39a99e10c7afd363c7c11a936';
// var authToken = '9a83f71db175beff8848856ad13e971a';

// var client = require('twilio')(accountSid, authToken);

// client.messages.create({
// 	to: "+13472836315",
// 	from: "+13475274222",
// 	body: "Checking to see if I am able to send message through twillo api for second time",
// 	mediaUrl: "https://climacons.herokuapp.com/clear.png",
// }, function(err, message) {
// 	console.log(message.sid)
// });



app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use(session({
	secret: 'whose line is it anyway?',
	resave: false,
	saveUninitialized: false,
})) 

app.listen('8888', () => console.log("Listening to port 8888"));

app.get('/auth', (req, res) => {
	console.log(req.session);
	if(req.session.email) {
		res.send(req.session.email);
	} else {
		res.send(null)
	}
});


app.get('/logout', (req, res) => {
	req.session.destroy();
	res.send('You are logged out.')
});

db.sequelize.sync().then(() => {
	app.use('/api', require('../routes'))
	app.get('/*', (req, res) => {
		res.sendFile(path.join(__dirname,'../views/index.html'));
	});
})

// module.exports = app;