/* REQUIRES */
var express = require('express');
var myApp = express();
var path = require('path');
var port = process.env.PORT || 3000;

/* USES */
myApp.use(express.static('public'));

// Base URL
myApp.get('/', function(req, res) {
	res.sendFile(path.resolve('public/views/index.html'));
});

// Listen
myApp.listen(port, function() {
	console.log('listening on:', port);
});
