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
    helpers.checkPass(email, password, (err, match) => {
      if (err) {
        callback(err);
      } else {
        callback(null, match);
      }
    });
  },

  findUserById: (id, callback) => {
    console.log('trying to find by id: ', id)
    db.select().from('user').where('user_id', id)
      .then(user => callback(null, user));
  },

  updateUser: (update, callback) => {
    console.log("put by ID: ", update)
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
};
