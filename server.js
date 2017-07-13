/* REQUIRES for server.js */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var index = require('./modules/routes/index')
var register = require('./modules/routes/register');
var login = require('./modules/routes/login');
var home = require('./modules/routes/home');
var newPet = require('./modules/routes/newPet');
var pets = require('./modules/routes/pets');
var newHistory = require('./modules/routes/newHistory');


/* USES for server.js */
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/pets', pets);
app.use('/register', register);
app.use('/login', login);
app.use('/home', home);
app.use('/newPet', newPet);
app.use('/newHistory', newHistory);
app.use('/', index);

// Globals
var port = process.env.PORT || 3000;

// Listen
app.listen(port, function() {
	console.log('Listening on port:', port);
}); // END server spin-up
