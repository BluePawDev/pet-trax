/* REQUIRES for login.js */
var express = require('express');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
// var user = require('../user');
var userLogged;


/* USES for login.js */
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());


/* CONFIG POOL */
var config = {
	database: 'dbpets',
	host: 'localhost',
	port: '5432',
	max: 12
};

var pool = new pg.Pool(config);

// START user login POST
router.post('/', function(req, res) {
	console.log('login.js POST hit with:', req.body);
	//creating object out of email from req.body
	var username = req.body.username;
	var password = req.body.password;
	// START pool.connect
	pool.connect(function(err, connection, done) {
		if (err) {
			done();
			res.send(400);
		} // END pool.connect IF
		else {
			console.log('Connected to dbPets.tblOwner');
			// START query dbPets.tblOwner for matching hypEmail/username
			connection.query("SELECT txtpassword FROM tblowner WHERE hypemail='" + username + "';",
				function(err, result) {
					if (err) throw err;
					console.log('result.rows', result.rows[0]);
					// START check email
					if (result.rows[0] === undefined) {
						res.send('not in system');
					} // END check email IF
					else {
						// Password returned from dB
						var pwHashed = result.rows[0].password;
						// START bcrypt compare password to hashed password
						bcrypt.compare(password, pwHashed, function(err, isMatch) {
							if (err) {
								res.send('error');
							} // END compare password IF
							else {
								if (isMatch) {
									done();
									res.send(result.rows);
								} // END compare isMatch IF
								else {
									done();
									res.send('password not a match');
								}
							} // END ELSE of bcrypt compare password to hashed password
						}); // END bcrypt compare password to hashed password
					} // END query matching hypEmail/username
				}); // END query dbPets.tblOwner for matching hypEmail/username
		} // END pool.connect ELSE
	}); // END pool.connect
}); // END user login POST


/* EXPORTS for login.js */
module.exports = router;
