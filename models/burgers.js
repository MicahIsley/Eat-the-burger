'use strict';

module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define('Burgers', {
    name: DataTypes.STRING,
    eaten: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burgers;
};