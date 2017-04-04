const bcrypt = require('bcrypt-nodejs');
const db = require('./config.js');
const SALT_WORK_FACTOR = 10;

module.exports = {
	checkPass: (email, password, callback) => {
		console.log('trying password ', email)
		console.log(password)
		db.select().from('user').where('email', email)
		.then(user => {
			bcrypt.compare(password, user[0].password, (err, isMatch) => {
				if (err) {
					console.log('password error ', err);
					callback(err, null);
				} else {
					console.log('match ', match);
					callback(null, match);
				}
			});
		})
	},

	hashPass: (password, callback) => {
		bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
			if (err) {
				callback(err, null);
			} else {
				bcrypt.hash(password, salt, null, (err, result) => {
					if (err) {
						callback(err, null);
					} else {
						callback(null, result);
					}
				});
			};
		});
	}
}