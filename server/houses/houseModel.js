const db = require('../config/config.js');

const getHouse = (houseId, callback) => {
  db.select().from('house').where('house_id', houseId)
    .then((house) => {
      callback(null, house[0]);
    })
    .catch((err) => {
      callback(err);
    });
};

const createHouse = (house, callback) => {
  console.log('creating house! ', house)
  db('house').insert({
    admin_user_in_house: house.admin_user_in_house,
    house_address: house.house_address,
    house_unit_number: house.house_unit_number,
    house_city: house.house_city,
    house_state: house.house_state,
    house_zip: house.house_zip,
    house_account: house.house_account,
    house_info: house.house_info,
  })
    .then((newHouse) => {
      callback(null, newHouse);
    })
    .catch(err =>
    callback(err));
};

const updateHouse = (update, callback) => {
  db('house').where('house_id', update.id)
    .update({
      admin_user_in_house: update.admin_user_in_house,
      house_address: update.house_address,
      house_unit_number: update.house_unit_number,
      house_city: update.house_city,
      house_state: update.house_state,
      house_zip: update.house_zip,
      house_account: update.house_account,
      house_info: update.house_info,
    })
    .then((updated) => {
      callback(null, true);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports = { getHouse, createHouse, updateHouse };
