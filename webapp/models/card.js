'use strict';

const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Card = loader.database.define(
	'cards',
	{
		cardId: {
			type: Sequelize.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		sendTo: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		content: {
			type: Sequelize.TEXT,
			allowNull: false
		},
		createdBy: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		updatedAt: {
			type: Sequelize.DATE,
			allowNull: false
		},
		likes: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		isDeleted: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0
		}
	},
	{
		freezeTableName: true,
		timestamps: false,
		indexes: [
			{
				fields: ['createdBy']
			}
		]
	}
);

module.exports = Card;
