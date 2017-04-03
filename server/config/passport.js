const LocalStrategy = require('passport-local').Strategy;
const User = require('../users/userModel.js');

// module.exports = () => {
// 	passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));	
// }

module.exports = (passport) => {

	passport.serializeUser((user, cb) => {
			done(null, user.id);
		});

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
	//local sign up
	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	(req, email, password, done) => {
		process.nextTick(() => {
			User.findOne({ 'local.email': email }, (err, user) => {
				if (err) return done(err);

				if (user) {
					return done(null, false, req.flash('signup message', 'That email is already taken.'));
				} else {
					var newUser = new User();
					newUser.local.email = email;
					newUser.local.password = newUser.generateHash(password);
					newUser.save((err) => {
						if (err) {
							throw err;
						}
						return done(null, newUser);
					});
				}
			})
		})
	}));
	//log in
	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	(req, email, password, done) => {
		User.findOne({'local.email': email }, (err, user) => {
			if (err) return done(err);

			if (!user) {
				return done(null, false, req.flash('loginMessage', 'Oops, wrong password!'));
			}

			return done(null, user);
		})
	}))
}