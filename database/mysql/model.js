const connection = require('./index.js');
const Sequelize = require('sequelize');

const Chairs = connection.define('chairs', {
	name: {
		type: Sequelize.STRING,
		required: true,
		allowNull: false
	},
	collection_id : {
		type: Sequelize.INTEGER,
		required: true,
		allowNull: false
	},
	url: {
		type: Sequelize.STRING,
		required: true,
		allowNull: false
	},
	max_price: {
		type: Sequelize.INTEGER,
		required: true,
		allowNull: true
	},
	min_price: {
		type: Sequelize.INTEGER,
		required: true,
		allowNull: true
	},
	limited_offer: {
		type: Sequelize.STRING,
		required: true,
		allowNull: false
	},
	on_sale: {
		type: Sequelize.STRING,
		required: true,
		allowNull: false
	}
}, {
	timestamps: false
});

// Synchronize database
Chairs
	.sync({ force: false })
	.then(() => console.log('Able to connect to Chairs Table'))
	.catch(err => console.error('Unable to connect to Chairs Table', err));

module.exports = {
	Chairs
};