const db = require('../config/config.js');

const getHouse = (houseId, callback) => {
	db.select().from('house').where('idhouse', houseId)
	.then(house => {
		callback(null, house[0]);
	}).catch((err) => {
		callback(err);
	});
}

module.exports = { getHouse }