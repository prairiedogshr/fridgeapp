const db = require('../config/config.js');
const helpers = require('../config/helpers.js');

module.exports = {

  findUserByEmail: (email, callback) => {
    db.select().from('user').where('user_email', email)
      .then((user) => {
        callback(null, user);
      })
      .catch(err => console.log('error: ', err));
  },

  change: (user, callback) => {
    helpers.checkPass(user.email, user.old, (err, match)=>{
      if(err){
        callback(err)
      }else if(!match){
        callback("wrong password")
      }else{
           helpers.hashPass(user.new1, (err,result)=>{
             db('user').where('user_email', user.email)
               .update({
                 user_password: result,
               }).then(() => {
                 callback(null, true);
               }).catch((err) => {
                 callback(err);
               });
           })
      }
    })

  },


  signup: (user, callback) => {
    db.select().from('user').where('user_email', user.user_email)
      .then((foundUser) => {
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
              db.select().from('user').where('user_email', user.user_email).then((newUser) => {
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
        console.log('error inside pass');
        callback(err);
      } else if (!match) {
        console.log('wrong pass');
        callback('wrong pass');
      } else {
        db.select('user_id').from('user').where('user_email', email)
        .then((resp) => {
          callback(null, resp[0].user_id);
        });
      }
    });
  },

  findUserById: (id, callback) => {
    db.select().from('user').where('user_id', id)
      .then(user => callback(null, user));
  },

  joinHouse: (update, callback) => {
    console.log('join house update: ', update)
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
        console.log('looks good')
        callback(null, true)
      })
      .catch((err) => {
        console.log('err')
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
          expensesReducer: {
            yearly: dataa[7].filter((exp) => exp.expense_due > new Date(new Date() - 3.154e+10)),
            lastMonth: dataa[7].filter((exp) => exp.expense_due > new Date(2017,2) && exp.expense_due < new Date(2017,3)),
            currentMonth: dataa[7].filter((exp) => exp.expense_due > new Date(2017,2) && exp.expense_due < new Date(2017,4)),
          },
        };
        callback(null, formedData);
      })
      .catch((err) => {
        callback(err);
      });
    });
  },
};
