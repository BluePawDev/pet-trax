/* REQUIRES for pets.js */
var express = require('express');
var path = require('path');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');

/* USES for pets.js */
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

// START pets GET
router.get('/', function(req, res) {
	console.log('req in pets.js', req.body);
	// START connect to dB
	pool.connect(function(err, connection, done) {
		if (err) {
			done();
			res.sendStatus(400);
		} else {
			console.log('pet get', req.body);
			var email = req.body
			connection.query("SELECT * FROM tblowner JOIN tblpet ON tblowner.hypemail tblpet.fk_ownerid JOIN tblhistory ON tblpet.id = tblhistory.fk_petid;");
			// connection.query("SELECT * FROM tblowner JOIN tblpet ON tblowner.hypemail tblpet.fk_ownerid JOIN tblhistory ON tblpet.id = tblhistory.fk_petid WHERE tblowner.hypemail = '" + email + "';");
			done();
			res.send('query run');
		}
	})
})
// END pets GET

/* EXPORTS for pets.js */
module.exports = router;
