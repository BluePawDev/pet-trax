/* REQUIRES for server.js */
var express = require('express');
var app = express();
var pg = require('pg');
var index = require('./modules/routes/index')
var register = require('./modules/routes/register');
var login = require('./modules/routes/login');
// var path = require('path');

/* CONFIG POOL */
var config = {
	database: 'dbpets',
	host: 'localhost',
	port: '5432',
	max: 12
};

var pool = new pg.Pool(config);


/* USES for server.js */
app.use(express.static('public'));
app.use('/', index);
app.use('/register', register);
app.use('/login', login);

// Globals
var port = process.env.PORT || 3000;

// Listen
app.listen(port, function() {
	console.log('Listening on port:', port);
}); // END server spin-up
