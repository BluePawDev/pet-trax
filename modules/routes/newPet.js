/* REQUIRES for newPet.js */
var express = require('express');
var path = require('path');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');
// var bcrypt = require('bcrypt');


/* USES for register.js */
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


// START new pet POST
router.post('/', function(req, res) {
	// START connect to dB
	pool.connect(function(err, connection, done) {
		if (err) {
			done();
			res.sendStatus(400);
		} else {
			console.log(req.body);
			var name = req.body.petName;
			var type = req.body.petType;
			var breed = req.body.petBreed;
			var color = req.body.petColor;
			var marking = req.body.petMarking;
			var sex = req.body.petSex;
			var dob = req.body.petDOB;
			var owner = req.body.petOwner;
			connection.query("INSERT INTO tblpet (txtpetname, dtmdob, txttype, txtbreed, txtcolor, txtmarking, txtsex, fk_ownerid) VALUES ('" + name + "', '" + dob + "', '" + type + "', '" + breed + "', '" + color + "', '" + marking + "', '" + sex + "', '" + owner + "');");
			done();
			res.sendStatus(201);
		}
	})
})

// 	// START connect to dB
// 	pool.connect(function(err, connection, done) {
// 		if (err) {
// 			done();
// 			res.send(400);
// 		} else {
// 			// START generate salt with bcrypt
// 			bcrypt.genSalt(12, function(err, salt) {
// 				if (err) {} else {
// 					// START generate hash with bcrypt
// 					bcrypt.hash(req.body.password, salt, function(err, hash) {
// 						// START query for INSERT new user into dB
// 						if (err) {
// 							res.sendStatus(400);
// 						} else {
// 							var first = req.body.firstName;
// 							var last = req.body.lastName;
// 							var email = req.body.email;
// 							var password = hash;
// 							connection.query("INSERT INTO tblowner (txtfirstname, txtlastname, hypemail, txtpassword) VALUES ('" + first + "', '" + last + "', '" + email + "', '" + password + "');");
// 							done();
// 							res.sendStatus(201);
// 						} // END query for INSERT new user into dB
// 					})
// 				} // END generate hash with bcrypt
// 			})
// 		} // END generate salt with bcrypt
// 	}) // END connect to dB
// }) // END user registration POST


/* EXPORTS for newPet.js */
module.exports = router;
