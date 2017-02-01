const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
var db = require('../models')
var router = require('../routes/index.js')


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());
app.use(express.static('public'))

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