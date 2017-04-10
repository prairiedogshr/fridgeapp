const userController = require('../users/userController.js');
const houseController = require('../houses/houseController.js');
// const passport = require('passport')
// const passportLocal = require('./passport.js')(passport)

module.exports = (app, passport) => {
  app.post('/api/users/signin', passport.authenticate('local-login', {
    successRedirect: '/#/dashboard',
    failureRedirect: '/#/login',
    failureFlash: false
  }));

  // app.post('/api/users/signin', passport.authenticate('google', {
  //   successRedirect: '/#/dashboard',
  //   failureRedirect: '/#/login',
  //   failureFlash: false    
  // }))
  // app.post('/api/users/signup', passport.authenticate('local-signup', {
  //   successRedirect: '/dashboard',
  //   failureRedirect: '/signup',
  //   failureFlash: false
  // }));
  app.get('/api/users/appstate/:id', userController.getAppState);
  app.post('/api/users/', userController.signup);
  app.get('/api/users/:id', userController.getUser);
  app.get('/api/houses/:house', houseController.getHouse);
  app.post('/api/houses/', houseController.createHouse);
  app.put('/api/users/', userController.updateUser);
  app.put('/api/houses/', houseController.updateHouse);
};
