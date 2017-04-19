const User = require('./userModel.js');

const findUserByEmail = (req, res, next) => {
  User.findUserByEmail(req.params.email, (err, user) => {
    if (err) {
      next(new Error(err));
    } else {
      if (user.length) {
        res.send('true');
      } else {
        res.send('false');
      }
    }
  });
};

const getAppState = (req, res, next) => {
  console.log('almost');
  User.getAppState(req.params.id, (err, user) => {
    if (err) {
      next(new Error(err));
    } else {
      res.send(user);
    }
  });
};

const getUser = (req, res, next) => {
  console.log('getting user');
  User.findUserById(req.params.id, (err, user) => {
    if (err) next(err);
    if (user.length) {
      res.send(user[0]);
    } else {
      next(new Error('no user'));
    }
  });
};

const signup = (req, res, next) => {
  User.signup(req.body, (err, user) => {
    if (err) {
      console.log('err: ', err);
      next(new Error(err));
    }
    res.send(user);
  });
};

const updateUser = (req, res, next) => {
  console.log('got into update user',req,res);
  User.updateUser(req.body, (err, user) => {
    if (err) {
      next(new Error(err));
    } else {
      res.send(user);
    }
  });
};

const change = (req,res,next) => {
  console.log('im inside change in the controller',req.body);
  User.change(req.body, (err, user) => {
    if(err){
      next(new Error(err));
    }else{
      res.send(user);
    }
  });
};


const removeUser = (req, res, next) => {
  console.log('got into update user');
      User.removeUser(req.body, (err, user) => {
        if (err) {
          next(new Error(err));
        }
      }
  );
};

const joinHouse = (req, res, next) => {
  console.log('got into update user');
  User.joinHouse(req.body, (err, user) => {
    if (err) {
      next(new Error(err));
    } else {
      console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%',user)
      res.send(user);
    }
  });
};

module.exports = {
  findUserByEmail,
  getAppState,
  getUser,
  signup,
  change,
  updateUser,
  removeUser,
  joinHouse,
};
