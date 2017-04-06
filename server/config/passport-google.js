const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: 'adlfkj',
  clientSecret: 'lfkdjf',
  callbackURL: 'fill in',
},
(accessToken, refreshToken, profile, cb) => {
  // find or create user // (err, user) => cb(err, user)
}));
