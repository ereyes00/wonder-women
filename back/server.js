const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy
var session = require('express-session')
const path = require('path');
var db = require('../models')
var router = require('../routes/index.js')


app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());
app.use(express.static('public'))

app.use(session({
	secret: 'what is session',
	resave: false,
	saveUninitialized: false,
}))

app.get('/aut', function(req, res) {
	console.log(req.session);
	if(req.session.email) {
		res.send(req.session.email)
	} else {
		res.send(null)
	}
});

app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});

app.use('/api', router)


app.get('/*', function(req, res){
	res.sendFile(path.join(__dirname,'../views/index.html'))
})


db.sequelize.sync().then(function(){
app.listen(8888, function(){
	console.log('listening to port 8888');
})
})
module.exports = app;