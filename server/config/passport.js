const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport) => {
	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		//find user
		done(err, user);
	})
	//local sign up
	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	(req, email, password, done) => {
		process.nextTick(() => {

		}
	} )))
}