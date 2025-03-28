const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfigLocal = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	port: process.env.DB_PORT,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	multipleStatements: false,
	namedPlaceholders: true
};

var database = mysql.createPool(dbConfigLocal);

module.exports = database;
		