var mysql = require("mysql");
var Sequelize = require("sequelize");
var connection;
var JAWSDB_URL = {
		host: "a07yd3a6okcidwap.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		user: "pdd2hkivnvqewtwg	",
		password: "c0p2sj9wduotgt27",
		database: "bybn2hmhv4qiag0f"
	}
	
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "Password123",
		database: "burger_db"
	});
};

var sequelize = new Sequelize("burger_db", "root", "Password123", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		idle: 1000
	}
});
module.exports = sequelize;
connection.connect();
module.exports = connection;