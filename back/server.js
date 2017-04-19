const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');
var session = require('express-session')
var db = require('../models')
var router = require('../routes/index.js')



app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../front/style/images')));

app.use(session({
	secret: 'whose line is it anyway?',
	resave: false,
	saveUninitialized: false,
})) 

const port = process.env.PORT || '8888'

app.listen(port, () => console.log("Listening to port " + port));


	
	




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