const express = require('express');
const port = process.env.PORT || 1337;
const app = express();
const passport = require('passport');	
const cookieParser = require('cookie-parser');
const session = require('express-session');
const db = require('./config/config.js');

// parsing middleware
require('./config/middleware.js')(app, express);

//passport
require('./config/passport.js')(passport);
app.use(cookieParser());
app.use(session({
secret: 'our secret',
name: 'cookie name',
// store: 
// proxy: true,
resave: true,
saveUninitialized: true
}));
app.use(passport.initialize());
// passport.use('local-login', localLoginStrategy)
app.use(passport.session());
//routes
require('./config/routes.js')(app, passport);

app.listen(port, () => {
  console.log('Server is listening on ', port);
});

module.exports = app;
