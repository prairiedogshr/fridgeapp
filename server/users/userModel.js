const db = require('../config/config.js');
const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const localPassport = require('../config/passport.js')(passport);
// const passportGoogle = require('../config/passport-google.js');

const getUser = (user, callback) => {
	db.select().from('users').where('email', user)
	.then((user) => {
		if (user) {
			callback(null, user);
		} else {
			callback('no user found');
		}
	})
};

module.exports = { getUser };