/* REQUIRES */
var express = require('express');
var app = express();
var index = require('./modules/routes/index')
// var path = require('path');


/* USES */
app.use(express.static('public'));
app.use('/', index);

// Globals
var port = process.env.PORT || 3000;

// Listen
app.listen(port, function() {
	console.log('Listening on port:', port);
}); // END server spin-up
