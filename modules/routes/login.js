/* REQUIRES for login.js */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


/* USES for login.js */
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());


/* EXPORTS for login.js */
module.exports = router;
