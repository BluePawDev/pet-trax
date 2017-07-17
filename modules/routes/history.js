/* REQUIRES for history.js */
var express = require('express');
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');
var pg = require('pg');


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

// START get pets POST
router.post('/', function(req, res) {
	var user = req.body; // data from the client

	// do database query to make a new todo
	pool.connect()
		.then(function(client) {
			client.query("SELECT dtmdate, txtpurpose, intweight, txtmeds, curcost, txtnotes FROM tblhistory JOIN tblpet ON tblhistory.fk_petid = tblpet.id WHERE fk_petid = '" + req.body.id + "'ORDER BY dtmdate DESC").then(function(petHealth) {
				client.release();
				res.send(petHealth.rows);
			});
		})
		.catch(function(err) {
			client.release();
			res.sendStatus(500); // server error
		});
});
// END get pets POST


// START update health PUT
router.put('/', function(req, res) {
	console.log(req.body);
	pool.connect()
		.then(function(client) {
			client.query('SELECT id, txtpetname, dtmdob, txttype, txtbreed, txtcolor, txtmarking, txtsex, age(dtmdob) FROM tblpet JOIN tblowner ON tblpet.fk_ownerid = tblowner.hypemail')
				.then(function(pets) {
					client.release();
					res.send(pets.rows);
				});
		})
		.catch(function(err) {
			client.release();
			res.sendStatus(500); // server error
		});
});
// END update health PUT


/* EXPORTS for history.js */
module.exports = router;
