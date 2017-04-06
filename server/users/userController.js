const db = require('../config/config.js');
const User = require('./userModel.js');
const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const localPassport = require('../config/passport.js')(passport);
// const passportGoogle = require('../config/passport-google.js');

const getUser = (req, res, next) => {
	console.log('getting user');
	User.getUserByEmail(req.params, (err, user) => {
		if (err) next(err);
		res.send('ok');
	})
};

const signup = (req, res, next) => {
	User.signup(req.body, (err, user) => {
		if (err) {
			console.log('err: ', err)
			next(new Error(err));
		}
		res.redirect('/dashboard');
	});
};

const updateUser = (req, res, next) => {
	console.log('got into update user')
	User.updateUser(req.body, (err, user) => {
		if (err) {
			next(new Error(err));
		} else {
			res.send(user);
		}
	})
}

module.exports = {
	getUser,
	signup,
	updateUser
	};