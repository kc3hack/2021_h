'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost/chat-app');

module.exports = {
	database: sequelize,
	Sequelize: Sequelize
};
