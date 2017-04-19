const express = require('express');
const path = require('path');

const port = process.env.PORT || 80;
const app = express();
const passport = require('passport');

const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

// parsing middleware
require('./config/middleware.js')(app, express);
// passport
require('./config/passport.js')(passport);

// mysqlstore setup
const options = {
  host: process.env.DB_SERVER,
  port: port,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

const sessionStore = new MySQLStore(options);

app.use(session({
  secret: 'our secret',
  name: 'cookie name',
  // store: sessionStore,
  // proxy: true,
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
// passport.use('local-login', localLoginStrategy)
app.use(passport.session());

// routes
require('./config/routes.js')(app, passport);

// chores webworker
require('./choresWorker.js');

app.use(express.static(path.join(__dirname, '/../build')));
app.get('/*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log('Server is listening on ', port);
});

module.exports = app;
