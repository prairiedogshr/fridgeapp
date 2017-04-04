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
	// passport.use('local-signup', new LocalStrategy({
	// 	session: true,
	// 	passReqToCallback: true
	// }, (req, user, done) => {
	// 	console.log('++++++++++++ ', user)
	// 	process.nextTick(() => {
	// 		User.signup(req.body, (err, user) => {
	// 			if (err) return done(err);

	// 			return done(null, user);
	// 			});
	// 		})
	// 	}));
	//log in
	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		session: true,
		passReqToCallback: true,
	}, (req, email, password, done) => {
		User.signin(email, password, (err, match) => {
			if (err) {
				console.log('err ', err);
				return done(err);
			}

			if (!match) {
				console.log('wrong pass!');
				return done(null, false, req.flash('loginMessage', 'Oops, wrong password!'));
			} else {
				User.findUserByEmail(email, (err, user) => {
					if (err) {
						console.log('err ', err);
						return done(err)
					} else {
						done(null, user[0])
					}
				})
			}
		})
	}))
}