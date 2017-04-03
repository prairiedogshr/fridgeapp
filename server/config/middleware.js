const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');

module.exports = (app, express) => {
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(express.static(__dirname + '/../../build'))
	// app.use(cookieParser);
	// app.use(session({
 //  secret: 'our secret',
 //  name: 'cookie name',
 //  // store: sessionStore, // connect-mongo session store
 //  // proxy: true,
 //  resave: true,
 //  saveUninitialized: true
	// }));
	// app.use(passport.initialize());
	// app.use(passport.session());
}