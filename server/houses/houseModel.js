const db = require('../config/config.js');

const getHouse = (houseId, callback) => {
	db.select().from('house').where('idhouse', houseId)
	.then(house => {
		callback(null, house[0]);
	}).catch((err) => {
		callback(err);
	});
};

const createHouse = (house, callback) => {
	console.log(house);
	db('house').insert({
		address: house.address,
		unit_number: house.unit_number,
		city: house.city,
		state: house.state,
		zip: house.zip,
		info: house.info,
		created_at: new Date(),
		updated_at: new Date()
	})
	.then(newHouse => {
		callback(null, newHouse)
	}).catch((err) =>
	callback(err));
};

module.exports = { getHouse, createHouse }