'use strict';

const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Card = loader.database.define(
	'cards',
	{
		cardId: {
			type: Sequelize.UUID,
			primaryKey: true,
			allowNull: false
		},
		sendTo: {
			type: Sequelize.UUID,
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
			allowNull: false
		},
		isDeleted: {
			type: Sequelize.INTEGER,
			default: 0,
			allowNull: false
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
