const Chore = require('./choreModel.js');

const getChore = (req, res, next) => {
  Chore.getChore(req.params.chore, (err, chore) => {
    if (err) {
      next(new Error(err));
    } else {
      res.send(chore);
    }
  });
};

const createChore = (req, res, next) => {
  Chore.createChore(req.body, (err, ok) => {
    if (err) {
      next(new Error(err));
    } else {
      // res.redirect('/#/dashboard');
      res.sendStatus(200);
    }
  });
};

const updateChore = (req, res, next) => {

  Chore.updateChore(req.body, (err, chore) => {
    if (err) {
      next(new Error(err));
    } else {
      res.send(chore);
    }
  });
};


const getHouseChores = (req, res, next) => {
  Chore.getHouseChores(req.params.house, (err, chores) => {
    if (err) {
      next(new Error(err));
    } else {
      res.send(chores);
    }
  });
};

const getUserChores = (req, res, next) => {
  Chore.getUserChores(req.params.user, (err, chores) => {
    if (err) {
      next(new Error(err));
    } else {
      res.send(chores);
    }
  });
}



module.exports = { getChore, createChore, updateChore, getHouseChores, getUserChores, };
