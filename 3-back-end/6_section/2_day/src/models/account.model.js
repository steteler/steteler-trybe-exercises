'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Account', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    }
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    }
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {
    timestamp: false,
    tableName: 'accounts',
    underscored: true
  });
};