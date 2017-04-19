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
			res.redirect('/#/dashboard');
		}
	})
};

const updateHouse = (req, res, next) => {
  House.updateHouse(req.body, (err, house) => {
    if (err) {
      next(new Error(err));
    } else {
      res.send(house);
    }
  });
};

module.exports = { getHouse, createHouse, updateHouse };
