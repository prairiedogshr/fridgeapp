const bcrypt = require('bcrypt-nodejs');
const db = require('./config.js');

const SALT_WORK_FACTOR = 10;

module.exports = {
  checkPass: (email, password, callback) => {
    console.log('trying to check pass...', email, password)
    db.select().from('user').where('user_email', email)
      .then((user) => {
        console.log('user!! ', user)
        if (user.length) {
          console.log('found user!! ', user);
          bcrypt.compare(password, user[0].user_password, (err, isMatch) => {
            if (err) {
              console.log('password error ', err);
              callback(err, null);
            } else if (!isMatch) {
              callback('wrong pass', null);
            } else {
              callback(null, isMatch);
            }
          });
        } else {
          console.log('nope')
          callback('no user');
        }
      }).catch((err) => {
        console.log('err ', err)
      })
  },

  hashPass: (password, callback) => {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) {
        callback(err, null);
      } else {
        bcrypt.hash(password, salt, null, (hashErr, result) => {
          if (hashErr) {
            callback(hashErr, null);
          } else {
            callback(null, result);
          }
        });
      }
    });
  },
};
