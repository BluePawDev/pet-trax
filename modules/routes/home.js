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



/* EXPORTS for register.js */
module.exports = router;
