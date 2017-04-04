const userController = require('../users/userController.js');
const houseController = require('../houses/houseController.js');
// const passport = require('passport')
// const passportLocal = require('./passport.js')(passport)

module.exports = (app, passport) => {
  app.post('/api/users/signin', passport.authenticate('local-login', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: false
  }));
  app.get('/api/users/:id', userController.getUser);
  app.get('/test', userController.test);
  // app.get('/api/houses/:house', houseController.getHouse);
  // app.post('/api/users/:id', userController.createUser);
  // app.post('/api/houses/:id', houseController.createHouse);
  // app.put('/users/:id', userController.updateUser);
  // app.put('/houses/:id', houseController.updateHouse);
}


