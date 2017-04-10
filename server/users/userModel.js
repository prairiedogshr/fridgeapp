const db = require('../config/config.js');
const helpers = require('../config/helpers.js');

module.exports = {

  findUserByEmail: (email, callback) => {
    db.select().from('user').where('user_email', email)
      .then((user) => {
        if (user.length) {
          console.log('found user: ', user);
          callback(null, user[0]);
        } else {
          console.log('no user');
          callback('no user found');
        }
      });
  },

  signup: (user, callback) => {
    console.log('user being created: ', user);
    db.select().from('user').where('user_email', user.user_email)
      .then((foundUser) => {
        console.log('~~~~~~~~~~~~ ', user);
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
              user_is_admin: user.user_admin,
              user_info: user.user_info,
              created_at: new Date(),
              updated_at: new Date(),
            }).then((inserted) => {
              console.log('+++++++++++ ', inserted);
              db.select().from('user').where('user_email', user.user_email)
                .then((newUser) => {
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
    console.log('~~~~~~~~` ', email, password)
    helpers.checkPass(email, password, (err, match) => {
      if (err) {
        console.log('error inside pass')
        callback(err);
      } else if (!match) {
        console.log('wrong pass');
        callback('wrong pass');
      } else {
        console.log('pass all good');
        callback(null, true);
      }
    });
  },

  findUserById: (id, callback) => {
    console.log('trying to find by id: ', id)
    db.select().from('user').where('user_id', id)
      .then(user => callback(null, user));
  },

  updateUser: (update, callback) => {
    console.log('put by ID: ', update)
    db('user').where('user_id', update.id)
      .update({
        [update.key]: update.value,
      })
      .then((updated) => {
        callback(null, true);
      })
      .catch((err) => {
        callback(err);
      });
  },

  getAppState: (id, callback) => {
    db.select().from('user').where('user_id', id)
    .then((data) => {
      const user = db.select().from('user').where('user_id', id);
      const house = db.select().from('house').where('house_id', data[0].house_in_user);
      const userTasks = db.select().from('task').where('claimed_by_user_in_task', id);
      const userChores = db.select().from('chore').where('assigned_to_user_in_chore', id);
      const houseTasks = db.select().from('task').where('house_in_task', data[0].house_in_user);
      const houseChores = db.select().from('chore').where('house_in_chore', data[0].house_in_user);

      Promise.all([user, house, userTasks, userChores, houseTasks, houseChores])
      .then((dataa) => {
        const formedData = {
          user: dataa[0] || undefined,
          house: dataa[1] || undefined,
          userTasks: dataa[2] || undefined,
          userChores: dataa[3] || undefined,
          houseTasks: dataa[4] || undefined,
          houseChores: dataa[5] || undefined,
        };
        callback(null, formedData);
      })
      .catch((err) => {
        callback(err);
      });
    });
  },
};
