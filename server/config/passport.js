const LocalStrategy = require('passport-local').Strategy;
const User = require('../users/userModel.js');

// module.exports = () => {
//   passport.use(new LocalStrategy(
//     (username, password, done) => {
//       User.findOne({ username }, (err, user) => {
//         if (err) {
//           return done(err);
//         }
//         if (!user) {
//           return done(null, false, { message: 'Incorrect username.' });
//         }
//         if (!user.validPassword(password)) {
//           return done(null, false, { message: 'Incorrect password.' });
//         }
//         return done(null, user);
//       });
//     },
//   ));
// };

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.user_id);
  });

  passport.deserializeUser((id, done) => {
    User.findUserById(id, (err, user) => {
      done(err, user);
    });
  });
  // local sign up
  passport.use('local-signup', new LocalStrategy({
    session: true,
    passReqToCallback: true,
  }, (req, user, done) => {
    process.nextTick(() => {
      User.signup(req.body, (err, newUser) => {
        if (err) return done(err);
        return done(null, newUser);
      });
    });
  }));
  // log in
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: true,
    passReqToCallback: true,
  }, (req, email, password, done) => {
    User.signin(email, password, (err, match) => {
      if (err) {
        console.log('error ', err);
        return done(err);
      }
      if (!match) {
        console.log('wrong pass!');
        return done(null, false);
      }
      console.log('got in here with: ', email);
      return User.findUserByEmail(email, (findUserErr, user) => {
        if (findUserErr) {
          return done(findUserErr);
        }
        return done(null, user);
      });
    });
  }));
};
