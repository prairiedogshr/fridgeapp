const db = require('../config/config.js');
const House = require('./houseModel.js');

const getHouse = (req, res, next) => {
	House.getHouse(req.params.house, (err, house) => {
		if (err) {
			next(new Error(err));
		} else {
			res.send(house);
		}
	})
};

const createHouse = (req, res, next) => {
	House.createHouse(req.body, (err, ok) => {
		if (err) {
			next(new Error(err));
		} else {
			res.redirect('/dashboard');
		}
	})
};

const updateHouse = (req, res, next) => {
	console.log('got into update House')
	House.updateHouse(req.body, (err, house) => {
		if (err) {
			next(new Error(err));
		} else {
			res.send(house);
		}
	})
}

module.exports = { getHouse, createHouse, updateHouse }
