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

db.sequelize.sync().then(() => {
	app.use('/api', require('../routes'))
	app.get('/*', (req, res) => {
		res.sendFile(path.join(__dirname,'../views/index.html'));
	});
})

// module.exports = app;