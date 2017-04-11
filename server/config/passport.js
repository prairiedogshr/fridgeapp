const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
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
    done(null, user);
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
    console.log('hello?')
    process.nextTick(() => {
      User.signup(req.body, (err, newUser) => {
        if (err) return done(err);
        return done(null, newUser);
      });
    });
  }));

  //google
  passport.use('google', new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "localhost:1337/#/dashboard"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log('hello?');
    return cb(null, 'hi!')
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));
  // log in
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: true,
    passReqToCallback: true,
  }, (req, email, password, done) => {
    console.log('inside local login with email: ', email);
    User.signin(email, password, (err, id) => {
      if (err) {
        console.log('error ', err);
        return done(err);
      }
      console.log('got in here with: ', id);
      return done(null, id);
    });
  }));
};
