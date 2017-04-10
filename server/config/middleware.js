const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

module.exports = (app, express) => {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '/../../build')));
};
