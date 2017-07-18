var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Burgers = sequelize.define("burgers", {
	name: {
		type: Sequelize.STRING
	},
	eaten: {
		type: Sequelize.BOOLEAN
	}
}, {
		timestamps: false	
});

Burgers.sync();

module.exports = Burgers;