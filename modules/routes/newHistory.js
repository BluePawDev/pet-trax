/* REQUIRES for newHistory.js */
var express = require('express');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');


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


// START new history POST
router.post('/', function(req, res) {
	console.log(req.body);
	// START connect to dB
	pool.connect(function(err, connection, done) {
		if (err) {
			done();
			res.send(400);
		} else {
			// Define data for insert query
			var date = req.body.apptDate;
			var purp = req.body.apptPurp;
			var wt = req.body.apptWt;
			var meds = req.body.apptMeds;
			var cost = req.body.apptCost;
			var notes = req.body.apptNotes;
			// START insert query syntax
			connection.query("INSERT INTO tblhistory (dtmdate, txtpurpose, intweight, txtmeds, curcost, txtnotes) VALUES ('" + date + "', '" + purp + "', '" + wt + "', '" + meds + "', '" + cost + "', '" + notes + "');");
			// END insert query syntax
			done();
			res.sendStatus(201);
		} // END insertyquery for new pet history
	}) // END pool.connect
}) // END generate hash with bcrypt


/* EXPORTS for register.js */
module.exports = router;
