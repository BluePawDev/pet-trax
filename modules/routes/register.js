/* REQUIRES for register.js */
var express = require('express');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
// var user = require('../user');

/* CONFIG POOL */
var config = {
	database: 'dbpets',
	host: 'localhost',
	port: '5432',
	max: 12
};

var pool = new pg.Pool(config);

router.use(bodyParser.json());

// START user registration POST
router.post('/', function(req, res) {
	// START connect to dB
	pool.connect(function(err, connection, done) {
		if (err) {
			done();
			res.send(400);
		} else {
			// START generate salt with bcrypt
			bcrypt.genSalt(12, function(err, salt) {
				if (err) {} else {
					// START generate hash with bcrypt
					bcrypt.hash(req.body.password, salt, function(err, hash) {
						if (err) {
							res.sendStatus(400);
						} else { // START query for INSERT new user into dB
							var first = req.body.firstName;
							var last = req.body.lastName;
							var email = req.body.email;
							var password = hash;
							connection.query("INSERT INTO tblowner (txtfirstname, txtlastname, hypemail, txtpassword) VALUES ('" + first + "', '" + last + "', '" + email + "', '" + password + "');");
							done();
							res.sendStatus(201);
						} // END query for INSERT new user into dB
					}) // END generate hash with bcrypt
				}
			})
		} // END generate salt with bcrypt
	}) // END connect to dB
}) // END user registration POST


/* EXPORTS for register.js */
module.exports = router;
