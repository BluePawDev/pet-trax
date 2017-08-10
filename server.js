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
var history = require('./modules/routes/history');
// var newhistory = require('./modules/routes/newhistory');
var DATABASE_URL = 'postgres://yvxriipgbsiioa:912ba03e78d1838015e751a8280b51554625e3273f435723bf78c021f7453e30@ec2-184-72-248-8.compute-1.amazonaws.com:5432/d3es631bga9li5'



/* USES for server.js */
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

// app.use('/newhistory', newhistory);
app.use('/pets', pets);
app.use('/register', register);
app.use('/login', login);
app.use('/home', home);
app.use('/newPet', newPet);
app.use('/history', history);
app.use('/', index);

// Globals
var port = process.env.PORT || 3000;

// Listen
app.listen(port, function() {
	console.log('Listening on port:', port);
	var connectionString = 'postgres://yvxriipgbsiioa:912ba03e78d1838015e751a8280b51554625e3273f435723bf78c021f7453e30@ec2-184-72-248-8.compute-1.amazonaws.com:5432/d3es631bga9li5';
	if (process.env.DATABASE_URL !== undefined) {
		console.log('env connection string');
		connectionString = process.env.DATABASE_URL;
		pg.defaults.ssl = true;
	} else {
		connectionString = 'postgres://localhost:3000/';
	}

	console.log("connectionString set to: ", connectionString);

	module.exports = connectionString;


}); // END server spin-up
