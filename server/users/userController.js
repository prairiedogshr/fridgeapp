const db = require('../config/config.js');
const bcrypt = require('bcrypt-nodejs');
// const passport = require('///');
// const passportGoogle = require('...');


const signin = (req, res, next) => {
	res.send('hi!')
}

module.exports = { signin };