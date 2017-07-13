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
	pool.connect()
		.then(function(client) {
			client.query('SELECT id, txtpetname, dtmdob, txttype, txtbreed, txtcolor, txtmarking, txtsex, age(dtmdob) FROM tblpet JOIN tblowner ON tblpet.fk_ownerid = tblowner.hypemail')
				// client.query('SELECT * FROM tblowner JOIN tblpet ON tblowner.hypemail = tblpet.fk_ownerid JOIN tblhistory ON tblpet.id = tblhistory.fk_petid')
				.then(function(pets) {
					client.release();
					console.log(pets.rows);
					res.send(pets.rows); // send todos array to client
				});
		})
		.catch(function(err) {
			client.release();
			res.sendStatus(500); // server error
		});
});
// END pets GET

/* EXPORTS for pets.js */
module.exports = router;
