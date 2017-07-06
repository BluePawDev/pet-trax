/* REQUIRES for server.js */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var index = require('./modules/routes/index')
var register = require('./modules/routes/register');
var login = require('./modules/routes/login');


/* USES for server.js */
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use('/register', register);
app.use('/login', login);
app.use('/', index);

// Globals
var port = process.env.PORT || 3000;

// Listen
app.listen(port, function() {
	console.log('Listening on port:', port);
}); // END server spin-up
