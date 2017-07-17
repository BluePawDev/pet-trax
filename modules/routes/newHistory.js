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


// START update health POST
router.post('/', function(req, res) {
	var id = req.body.id;
	var date = req.body.date;
	var purpose = req.body.purpose;
	var wt = req.body.wt;
	var meds = req.body.meds;
	var cost = req.body.cost;
	var notes = req.body.notes;
	pool.connect()
		.then(function(client) {
			client.query("INSERT INTO tblhistory (dtmdate, txtpurpose, intweight, txtmeds, curcost, txtnotes, fk_petid) VALUES ('" + date + "','" + purpose + "','" + wt + "','" + meds + "','" + cost + "','" + notes + "','" + id + "')")
				.then(function(petHealth) {
					client.release();
					res.send(petHealth.rows);
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
