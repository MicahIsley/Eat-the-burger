var mysql = require("mysql");
var Sequelize = require("sequelize");

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