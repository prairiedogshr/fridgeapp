const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use('google', new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.hugequickly.com"
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, 'hi!')
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));