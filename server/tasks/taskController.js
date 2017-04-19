const Task = require('./taskModel.js');

const getTask = (req, res, next) => {
  Task.getTask(req.params.task, (err, task) => {
    if (err) {
      next(new Error(err));
    } else {
      res.send(task);
    }
  });
};

const createTask = (req, res, next) => {
  Task.createTask(req.body, (err, ok) => {
    if (err) {
      next(new Error(err));
    } else {
      res.send(true)
    }
  });
};

const updateTask = (req, res, next) => {
  Task.updateTask(req.body, (err, task) => {
    if (err) {
      next(new Error(err));
    } else {
      res.send(task);
    }
  });
};

module.exports = { getTask, createTask, updateTask };
