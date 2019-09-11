'use strict';
module.exports = (Sequelize, DataTypes) => {
	var Lead = Sequelize.define('Lead', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,

			allowNull: false,
			primaryKey: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});

	return Lead;
};