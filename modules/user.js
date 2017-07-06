/* REQUIRES for user.js */
var pg = require('pg');


/* CONFIG POOL */
var config = {
	database: 'dbpets',
	host: 'localhost',
	port: '5432',
	max: 12
};

var pool = new pg.Pool(config);


/* EXPORTS for user.js */
module.exports = pool;
