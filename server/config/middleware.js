const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

var ignore = function(path, path2, middleware) {
  return function(req, res, next) {
    if (path === req.path || path2 === req.path) {
      return next();
    } else {
      return middleware(req, res, next);
    }
  };
};

module.exports = (app, express) => {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '/../../build')));
  app.use(ignore('/api/users/signin', '/api/users/signup', (req, res, next) => {
    console.log('heeey in auth!')
    next()
  }))
};
