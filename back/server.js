const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const session = require('express-session');
var db = require('../models')
//var router = require('./routes/api.js')
const app = express();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());
app.use(express.static('public'))


app.get('/*', function(req, res){
	res.sendFile(path.join(__dirname,'../views/index.html'))
})


db.sequelize.sync().then(function(){
app.listen(8888, function(){
	console.log('listening to port 8888');
})
})
module.exports = app;