const db = require('./config/config.js');
const userModel = require('./users/userModel.js');
const choreModel = require('./chores/choreModel.js');

// 'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

// const nowDate = new Date();

setInterval(() => {

  db.select().from('house')
    .then((houses) => {
      houses.forEach((house) => {
        db.select().from('user').where('house_in_user', house.house_id)
          .then((roomies) => {
            const max = roomies.length;
            const allAssigned = roomies.every(roomie => roomie.user_chore_rotation);
            roomies.forEach((roomie, ind) => {
              let newRotation;
              if (allAssigned) {
                newRotation = roomie.user_chore_rotation + 1;
                if (newRotation > max) {
                  newRotation = 1;
                }
              } else {
                newRotation = ind + 1;
              }

              const update = {
                user_id: roomie.user_id,
                house_in_user: roomie.house_in_admin,
                user_first_name: roomie.user_first_name,
                user_last_name: roomie.user_last_name,
                user_email: roomie.user_email,
                user_phone: roomie.user_phone,
                user_birthday: roomie.user_birthday,
                user_info: roomie.user_info,
                user_chore_rotation: newRotation,             
              };
              userModel.updateUser(update, (err, response) => {
                if (response) {
                  // db.select().from('chore').where('house_in_chore', roomie.house_in_user).andWhere('chore_group', roomie.user_chore_rotation)
                  //   .then((chores) => {
                  //     const mailText = chores.reduce((text, chore) => `${text}<div>${chore.chore_name}</div>`, '');
                  //     // setup email data with unicode symbols
                  //     const mailOptions = {
                  //       from: '"The Fridge Team" <prairiedogsssfridge@gmail.com>', // sender address
                  //       to: roomie.user_email, // list of receivers
                  //       subject: 'You have new chores! ✔', // Subject line
                  //       // text: `text: ${mailText}`, // plain text body
                  //       html: `<div>${mailText}</div>`, // html body
                  //     };
                  //     transporter.sendMail(mailOptions, (error, info) => {
                  //       if (error) {
                  //         return
                  //       }
                  //
                  //     });
                  //   });
                  return response;
                }
                return false;
              });
            });
          })
          .catch((err) => {
            throw new Error(err);
          });
      });
      return true;
    })
    // update every chore from complete to incomplete
    .then(() => {
      db.select().from('chore')
        .then((chores) => {
          chores.forEach((chore) => {
            const update = {
              id: chore.chore_id,
              key: 'chore_is_done',
              value: 0,
            };
            choreModel.updateChore(update, (err, response) => response || false);
          });
          return true;
        });
    });
}, 1000 * 60 * 60 * 24);
// once per day
