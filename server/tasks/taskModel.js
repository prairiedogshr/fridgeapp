const db = require('../config/config.js');

const getTask = (taskId, callback) => {
  db.select().from('task').where('task_id', taskId)
    .then((task) => {
      callback(null, task[0]);
    })
    .catch((err) => {
      callback(err);
    });
};

const createTask = (task, callback) => {
  db('task').insert({
    house_in_task: task.house_in_task,
    task_name: task.task_name,
  })
    .then((newTask) => {
      console.log('new task? ', newTask)
      callback(null, newTask[0]);
    })
    .catch((err) => {
      callback(err);
    });
};

const updateTask = (update, callback) => {
  db('task').where('task_id', update.id).update({
    [update.key]: update.value,
  })
    .then((updated) => {
      callback(null, true);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports = { getTask, createTask, updateTask };
