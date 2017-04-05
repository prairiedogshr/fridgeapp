const db = require('../config/config.js');
const House = require('./houseModel.js');

const getHouse = (req, res, next) => {
	console.log(req.params)
	House.getHouse(req.params.house, (err, house) => {
		if (err) {
			next(new Error(err));
		} else {
			res.send(house);
		}
	})
}

module.exports = { getHouse }
