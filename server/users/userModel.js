const db = require('../config/config.js');
const helpers = require('../config/helpers.js');

module.exports = {

  findUserByEmail: (email, callback) => {
    console.log('inside with emailL ', email)
    db.select().from('user').where('user_email', email)
      .then((user) => {
        callback(null, user);
      }).catch(err => console.log('err: ', err))
      //   if (user.length) {
      //     console.log('found user: ', user);
      //     callback(null, user[0]);
      //   } else {
      //     console.log('no user');
      //     callback('no user found');
      //   }
      // });
  },

  signup: (user, callback) => {
    console.log('user being created: ', user);
    db.select().from('user').where('user_email', user.user_email)
      .then((foundUser) => {
        console.log('user:  ', user);
        if (foundUser.length) {
          callback('email already exists', null);
        } else {
          helpers.hashPass(user.user_password, (err, result) => {
            db('user').insert({
              user_first_name: user.user_first_name,
              user_last_name: user.user_last_name,
              user_email: user.user_email,
              user_username: user.user_username,
              user_password: result,
              user_phone: user.user_phone,
              user_birthday: user.user_birthday,
              user_is_admin: user.user_admin,
              user_info: user.user_info,
              house_in_user: user.house_in_user,
            }).then((inserted) => {
              console.log('inserted:  ', inserted);
              db.select().from('user').where('user_email', user.user_email).then((newUser) => {
                  console.log("PLESASFFRCA",newUser[0])
                  callback(null, newUser[0]);
                })
                .catch((selectErr) => {
                  callback(selectErr);
                });
            });
          });
        }
      });
  },

  signin: (email, password, callback) => {
    console.log('~~~~~~~~` ', email, password);
    helpers.checkPass(email, password, (err, match) => {
      if (err) {
        console.log('error inside pass');
        callback(err);
      } else if (!match) {
        console.log('wrong pass');
        callback('wrong pass');
      } else {
        console.log('pass all good');
        db.select('user_id').from('user').where('user_email', email)
        .then((resp) => {
          console.log('shoudl be user id: ', resp);
          callback(null, resp[0].user_id);
        });
      }
    });
  },

  findUserById: (id, callback) => {
    console.log('trying to find by id: ', id);
    db.select().from('user').where('user_id', id)
      .then(user => callback(null, user));
  },

  joinHouse: (update, callback) => {
    console.log('put by ID: ', update);
    db('user').where('user_id', update.id)
      .update({
        [update.key]: update.value,
      })
      .then(() => {
        callback(null, true);
      })
      .catch((err) => {
        callback(err);
      });
  },

  updateUser: (user, callback) => {
    console.log(user);
    db('user').where('user_id', user.user_id)
      .update({
        house_in_user: user.house_in_admin,
        user_first_name: user.user_first_name,
        user_last_name: user.user_last_name,
        user_email: user.user_email,
        user_phone: user.user_phone,
        user_birthday: user.user_birthday,
        user_info: user.user_info,
      })
      .then(() => {
        callback(null, true);
      })
      .catch((err) => {
        callback(err);
      });
  },

  removeUser: (user, callback) => {
    db('user').where('user_id', user.id)
      .update({
        house_in_user: null
      })
      .then(() => {
        callback(null, true)
      })
      .catch((err) => {
        callback(err);
      })
  },

  getAppState: (id, callback) => {
    db.select().from('user').where('user_id', id)
    .then((data) => {
      const user = db.select().from('user').where('user_id', id);
      const house = db.select().from('house').where('house_id', data[0].house_in_user);
      const roommates = db.select().from('user').where('house_in_user', data[0].house_in_user);
      const userTasks = db.select().from('task').where('claimed_by_user_in_task', id);
      const userChores = db.select().from('chore').innerJoin('user', 'user.user_chore_rotation', 'chore.chore_group').where('user.user_id', id).andWhere('chore.house_in_chore', data[0].house_in_user);
      const houseTasks = db.select().from('task').where('house_in_task', data[0].house_in_user);
      const houseChores = db.select().from('chore').where('house_in_chore', data[0].house_in_user);
      const expenses = db.select().from('expense').where('house_in_expense', data[0].house_in_user);

      Promise.all([user, house, userTasks, userChores, houseTasks, houseChores, roommates, expenses])
      .then((dataa) => {
        const formedData = {
          userReducer: dataa[0][0] || undefined,
          houseReducer: dataa[1][0],
          houseReducer: Object.assign({},
            dataa[1][0],
            {users: dataa[6]}
            ),
          // houseReducer: dataa[1] || undefined,
          tasksReducer: {
            complete: dataa[4].filter(item => item.task_is_done === 1),
            incomplete: dataa[4].filter(item => item.task_is_done === 0)
          },
          choresReducer: {
            houseChores: dataa[5],
            complete: dataa[3].filter(chore => chore.chore_is_done === 1),
            incomplete: dataa[3].filter(chore => chore.chore_is_done === 0),
            groups: [1]
          },
          expensesReducer: dataa[7],
        };
        callback(null, formedData);
      })
      .catch((err) => {
        callback(err);
      });
    });
  },
};
