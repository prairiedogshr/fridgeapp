const db = require('../config/config.js');
const User = require('./userModel.js');
const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const localPassport = require('../config/passport.js')(passport);
// const passportGoogle = require('../config/passport-google.js');


const signin = (req, res, next) => {
	console.log('reeeequeeest ', req.body)
    passport.authenticate('local-signin', {failureRedirect: '/login' }),
    (req, res) => 
		res.send('got here');
		// res.redirect('/dashboard');
};

const getUser = (req, res, next) => {
	console.log('getting user');
	User.getUserByEmail(req.params, (err, user) => {
		if (err) next(err);

		// res.send(user);
	console.log(req.params.id)
	res.send('ok');
	})
};

const test = (req, res, next) => {
	User.getUserByEmail('test@test.com', (err, user) => {
		res.send(user)
	})
}
// })

module.exports = {
	signin,
	getUser,
	test
	};