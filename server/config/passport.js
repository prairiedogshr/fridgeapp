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

	passport.serializeUser((user, done) => {
			done(null, user.iduser);
		});

  passport.deserializeUser(function(id, done) {
    User.findUserById(id, function(err, user) {
      done(err, user);
    });
  });
	//local sign up
	passport.use('local-signup', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		session: true,
		passReqToCallback: true
	}, (user, password, done) => {
		console.log('++++++++++++ ')
		process.nextTick(() => {
			User.findByEmail(email, (err, user) => {
				if (err) return done(err);

				if (user) {
					return done(null, false, req.flash('signup message', 'That email is already taken.'));
				} else {
					User.signup(email, password, (err, token) => {
						if (err) {
							throw err;
						}
						return done(null, token);
					});
				}
			})
		})
	}));
	//log in
	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		session: true,
		passReqToCallback: true,
	}, (req, email, password, done) => {
		User.getUserByEmail(email, (err, user) => {
			if (err) {
				console.log('err ', err);
				return done(err);
			}

			if (!user) {
				console.log('no user');
				return done(null, false, req.flash('loginMessage', 'Oops, wrong password!'));
			} else {
				console.log('heres the user: ', user)
				return done(null, user);
			}
		})
	}))
}