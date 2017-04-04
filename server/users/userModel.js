const db = require('../config/config.js');
const bcrypt = require('bcrypt-nodejs');
// const passportGoogle = require('../config/passport-google.js');
const helpers = require('../config/helpers.js');

module.exports = {

getUserByEmail: (email, callback) => {
	console.log('email ', email)
	console.log('got into getuserbyemail')
	db.select().from('user').where('email', email)
	.then((user) => {
		console.log(' userr ', user);
		if (user) {
			callback(null, user[0]);
		} else {
			console.log('no user')
			callback('no user found');
		}
	})
},

signup: (user, callback) => {
		console.log('user being created: ', user);
		helpers.hashPass(user.password, function(err, result) {
			db('user').insert({
				first_name,
				last_name,
				email,
				username,
				password,
				phone,
				admin,
				info,
				created_at,
				updated_at
			}).then((inserted) => {
				// db.select().from('user').where('email', user.email)
				// .then(newUser => {
				// 	var token = jwt.encode(newUser, 'secret');
				// 	callback(null, token); 
				// })
				callback(null, true);
			}).catch((err) => {
				callback(err);
			});
		});
	},

	signin: function(email, password, callback) {
		helpers.checkPass(email, password, function(err, match) {
			if (err) {
				callback(err);
			}
			else {
				callback(null, match)
			}
		})
	},

	findUserById: (id, callback) => {
		db.select().from('user').where('iduser', id)
		.then(user => callback(null, user));
	}
}