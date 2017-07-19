var mysql = require("mysql");
var Sequelize = require("sequelize");
var sequelize;


var JAWSDB_URL = {
		host: "a07yd3a6okcidwap.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		user: "pdd2hkivnvqewtwg	",
		password: "c0p2sj9wduotgt27",
		database: "bybn2hmhv4qiag0f",
		dialect: "mysql"
}


if (process.env.JAWSDB_URL) {
	sequelize = new Sequelize(JAWSDB_URL.database, JAWSDB_URL.user, JAWSDB_URL.password);
} else {
	sequelize = new Sequelize("burger_db", "root", "Password123", {dialect: "mysql"});
};

// var sequelize = new Sequelize("burger_db", "root", "Password123", {
// 	host: "localhost",
// 	dialect: "mysql",
// 	pool: {
// 		max: 5,
// 		min: 0,
// 		idle: 1000
// 	}
// });


module.exports = sequelize;
connection.connect();
module.exports = connection;