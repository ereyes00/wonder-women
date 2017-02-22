const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');
var session = require('express-session')
var db = require('../models')
var router = require('../routes/index.js')
var account = require('./apiKey.js');


var client = require('twilio')(account.accountSid, account.authToken);



app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../front/style/images')));

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


app.post('/reminder', (req, res) => {
	var num = '+1' + req.body.phoneNumber
	client.messages.create({
	to: num,
	from: "+13475274222",
	body: "Art Gal wants to remind you that one of your bookmarked events is closing soon.",
 // mediaUrl: "https://climacons.herokuapp.com/clear.png",
}, function(err, message) {
	console.log(message.sid)
});
	res.send('Your message was successully sent out')
})


db.sequelize.sync().then(() => {
	app.use('/api', require('../routes'))
	app.get('/*', (req, res) => {
		res.sendFile(path.join(__dirname,'../views/index.html'));
	});
})

// module.exports = app;