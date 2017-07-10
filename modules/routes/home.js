/* REQUIRES for home.js */
var express = require('express');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');


/* USES for home.js */
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

// START owner/pet history GET
router.get('/', function(req, res) {
	console.log(req.body);
	// START connect to dB
	pool.connect(function(err, connection, done) {
		if (err) {
			done();
			res.send(400);
		} else {
			// Define data for select query
			var petOwner = req.body.username;
			// START select query syntax
			connection.query("SELECT * FROM tblowner JOIN tblpet ON tblowner.hypemail = tblpet.fk_ownerid JOIN tblhistory ON tblpet.id = tblhistory.fk_petid WHERE tblowner.hypemail = '" + petOwner + "');");
			// END select query syntax
			done();
			res.sendStatus(201);
		} // END select for owner/pet history
	}) // END pool.connect
}) // END owner/pet history GET


/* EXPORTS for register.js */
module.exports = router;
