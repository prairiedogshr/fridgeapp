const db = require('../config/config.js');
const bcrypt = require('bcrypt-nodejs');
// const passportGoogle = require('../config/passport-google.js');
const helpers = require('../config/helpers.js');

module.exports = {

findUserByEmail: (email, callback) => {
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
	db.select().from('user').where('email', user.email)
	.then(user => {
		if (user) {
			callback('email already exists', null)
			return
		} else {
			helpers.hashPass(user.password, function(err, result) {
				console.log('hashed pass: ', result)
				db('user').insert({
					first_name: user.first_name,
					last_name: user.last_name,
					email: user.email,
					username: user.username,
					password: result,
					password: user.password,
					phone: user.phone,
					admin: user.admin,
					info: user.info,
					created_at: new Date(),
					updated_at: new Date()
				}).then((inserted) => {
				db.select().from('user').where('email', user.email)
				.then(newUser => {
					callback(null, newUser[0]); 
				}).catch((err) => {
					callback(err);
				});
				});
			})			
		}
	})
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
	},

	updateUser: (update, callback) => {
		db('user').where('iduser', update.id)
		.update({
			[update.key]: update.value
		})
		.then(updated => {
			callback(null, true)
		}).catch((err) => {
			callback(err);
		})
	}
}


