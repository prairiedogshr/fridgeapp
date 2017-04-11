const userController = require('../users/userController.js');
const houseController = require('../houses/houseController.js');
const taskController = require('../tasks/taskController.js');
const choreController = require('../chores/choreController.js');
const expenseController = require('../expenses/expenseController.js');

// const passport = require('passport')
// const passportLocal = require('./passport.js')(passport)

module.exports = (app, passport) => {
  // app.post('/api/users/signin', 
  //   passport.authenticate('local-login', {
  //   successRedirect: '/#/dashboard',
  //   failureRedirect: '/#/login',
  //   failureFlash: false,
  //   }));
  app.post('/api/users/signin', 
    passport.authenticate('local-login'),
      ((req, res) => res.send({
        id: req.user
      }))
    );
  // app.post('/api/users/signin', passport.authenticate('google', {
  //   successRedirect: '/#/dashboard',
  //   failureRedirect: '/#/login',
  //   failureFlash: false,
  // }))
  // app.post('/api/users/signup', passport.authenticate('local-signup', {
  //   successRedirect: '/dashboard',
  //   failureRedirect: '/signup',
  //   failureFlash: false,
  // }));
  app.get('/api/users/appstate/:id', userController.getAppState);
  app.get('/api/users/:id', userController.getUser);
  app.put('/api/users/:id', userController.updateUser);
  app.post('/api/users/', userController.signup);

  app.get('/api/houses/:house', houseController.getHouse);
  app.put('/api/houses/', houseController.updateHouse);
  app.post('/api/houses/', houseController.createHouse);

  app.get('/api/chores/:chore', choreController.getChore);
  app.put('/api/chores', choreController.updateChore);
  app.post('/api/chores', choreController.createChore);

  app.get('/api/chores/house/:house', choreController.getHouseChores);
  app.get('/api/chores/user/:user', choreController.getUserChores);
  // app.get('/api/chores/user/:user/complete', choreController.getUserCompleteChores);
  // app.get('/api/chores/user/:user/incomplete', choreController.getUserIncompleteChores);
  // app.delete('/api/chores/:chore', choreController.deleteChore);

  app.get('/api/tasks/:task', taskController.getTask);
  app.put('/api/tasks/:task', taskController.updateTask);
  app.post('/api/tasks/', taskController.createTask);

  app.get('/api/expenses/:expense', expenseController.getExpense);
  app.put('/api/expenses/:expense', expenseController.updateExpense);
  app.post('/api/expenses/', expenseController.createExpense);
};
