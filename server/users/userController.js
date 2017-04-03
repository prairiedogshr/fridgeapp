const db = require('../config/config.js');
const User = require('./userModel.js');
const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const localPassport = require('../config/passport.js')(passport);
// const passportGoogle = require('../config/passport-google.js');


const signin = (req, res, next) => {
	res.send('hi')
	passport.authenticate('local'), (req, res) => {
		res.send('got here');
		// res.redirect('/dashboard');
	}
};

const getUser = (req, res, next) => {
	User.getUser(req.params.id, (err, user) => {
		if (err) next(err);

		// res.send(user);
	console.log(req.params.id)
	res.send('ok');
	})
}
// })

module.exports = {
	signin,
	getUser
	};