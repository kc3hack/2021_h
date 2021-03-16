'use strict';

var config = require('../config')

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || config.PostgreSQL.link );

module.exports = {
	database: sequelize,
	Sequelize: Sequelize
};
