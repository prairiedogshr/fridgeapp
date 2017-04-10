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
      res.redirect('/#/dashboard');
    }
  });
};

const updateChore = (req, res, next) => {
  console.log('got into update chore');
  Chore.updateChore(req.body, (err, chore) => {
    if (err) {
      next(new Error(err));
    } else {
      res.send(chore);
    }
  });
};

module.exports = { getChore, createChore, updateChore };
