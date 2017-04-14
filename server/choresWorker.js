const db = require('./config/config.js');
const userModel = require('./users/userModel.js');

// const nowDate = new Date();

// console.log(`nowDate: ${nowDate.getUTCDay()}`);


// setInterval(() => {
  // db.select().from('house')
  //   .then((houses) => {
  //     console.log(houses.length);
  //     houses.forEach((house) => {
  //       db.select().from('user').where('house_in_user', house.house_id)
  //         .then((roomies) => {
  //           console.log(roomies.length);
  //           const max = roomies.length;
  //           const allAssigned = roomies.every(roomie => roomie.user_chore_rotation);
  //           roomies.forEach((roomie, ind) => {
  //             let newRotation;
  //             if (allAssigned) {
  //               newRotation = roomie.user_chore_rotation + 1;
  //               if (newRotation > max) {
  //                 newRotation = 1;
  //               }
  //             } else {
  //               newRotation = ind + 1;
  //             }

  //             const update = {
  //               id: roomie.user_id,
  //               key: 'user_chore_rotation',
  //               value: newRotation,
  //             };
  //             userModel.updateUser(update, (response) => {
  //               if (response) {
  //                 return response;
  //               }
  //               return 'uh oh';
  //             });
  //           });
  //         })
  //         .catch((err) => {
  //           throw new Error(err);
  //         });
  //     });
  //   });
// }, 1000 * 60 * 60);
// // once per hour
