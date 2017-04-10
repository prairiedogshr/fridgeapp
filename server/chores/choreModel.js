const db = require('../config/config.js');

const getChore = (choreId, callback) => {
  db.select().from('chore').where('chore_id', choreId)
    .then((chore) => {
      callback(null, chore[0]);
    })
    .catch((err) => {
      callback(err);
    });
};

const createChore = (chore, callback) => {
  console.log('chore: ', chore);
  db('chore').insert({
    house_in_chore: chore.house_in_chore,
    chore_name: chore.chore_name,
    chore_due: chore.chore_due,
    chore_group: chore.chore_group,
    chore_parent: chore.chore_parent,
    chore_is_done: chore.chore_is_done,
    assigned_to_user_in_chore: chore.assigned_user_in_chore,
  })
    .then((newChore) => {
      callback(null, newChore);
    })
    .catch((err) => {
      callback(err);
    });
};

const updateChore = (update, callback) => {
  db('chore').where('chore_id', update.id).update({
    [update.key]: update.value,
  })
    .then((updated) => {
      callback(null, true);
    })
    .catch((err) => {
      callback(err);
    });
};


const getHouseChores = (houseId, callback) => {
  db.select().from('chore').where('house_in_chore', houseId)
    .then(chores => {
      callback(null, chores);
    })
    .catch(err => {
      callback(err);
    });
};

const getUserChores = (userId, callback) => {
  db.select().from('chore').where('assigned_to_user_in_chore', userId)
    .then(chores => {
      callback(null, chores);
    })
    .catch(err => {
      callback(err);
    });
};

// const getUserCompleteChores = (userId) => {

// }

// const getUserIncompleteChores = (userId) => {

// }

// const deleteChore = (choreId) => {

// }




// these are frontend functions that need to be built out

// const setHouseChoreDueDate = (choreId) => {

// }

// const groupHouseChore = (choreId) => {

// }

// const completeUserChore = (choreId) => {

// }

// const undoCompleteUserChore = (choreId) => {

// }

// const assignChorestoUsers = (choreId) => {

// }



module.exports = { getChore, createChore, updateChore, getHouseChores, getUserChores, };
