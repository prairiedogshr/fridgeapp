// const connection = require('knex')({
//   client: 'mysql',
//   connection: {
//     host: process.env.DB_SERVER,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//   },
//   useNullAsDefault: true
// });
// const db = require('knex')(connection);

var db = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'fridge'
  }
});



////////////////////////////////////////////////////////////////
// USER TABLE
////////////////////////////////////////////////////////////////

db.schema.hasTable('user').then(exists => {
  if(!exists) {
    db.schema.createTable('user', user => {
      user.increments('iduser').primary();
      user.string('first_name', 30).notNullable();
      user.string('last_name', 30).notNullable();
      user.string('email', 100).notNullable();
      user.string('username', 16).notNullable();
      user.string('password', 32).notNullable();
      user.string('phone', 10).notNullable();
      // user.integer('house').nullable().unsigned();
      user.foreign('house').references('house.idhouse');
      user.boolean('admin').defaultTo(0); 
      user.text('info').nullable();
      user.timestamps();
    }).then(table => {
      console.log('Created table: ', table);
    });
  }
});



////////////////////////////////////////////////////////////////
// HOUSE TABLE
////////////////////////////////////////////////////////////////

db.schema.hasTable('house').then(exists => {
  if(!exists) {
    db.schema.createTable('house', house => {
      house.increments('idhouse').primary();
      // house.integer('admin').notNullable().unsigned();
      house.foreign('admin').references('user.iduser');
      house.string('address', 255).notNullable();
      house.string('unit_number', 30).nullable();
      house.string('city', 100).notNullable();
      house.string('state', 2).notNullable();
      house.string('zip', 5).notNullable();
      house.text('info').nullable();
      house.timestamps();      
    }).then(table => {
      console.log('Created table: ', table);
    });
  }
});



////////////////////////////////////////////////////////////////
// CHORE TABLE
////////////////////////////////////////////////////////////////

db.schema.hasTable('chore').then(exists => {
  if(!exists) {
    db.schema.createTable('chore', chore => {
      chore.increments('idchore').primary();
      // chore.integer('house').notNullable().unsigned();
      chore.foreign('house').references('house.idhouse');
      // chore.integer('assigned_to').nullable().unsigned();
      chore.foreign('assigned_to').references('user.iduser');
      chore.boolean('done').defaultTo(0); 
      chore.timestamps();      
    }).then(table => {
      console.log('Created table: ', table);
    });
  }
});



////////////////////////////////////////////////////////////////
// TASK TABLE
////////////////////////////////////////////////////////////////

db.schema.hasTable('task').then(exists => {
  if(!exists) {
    db.schema.createTable('task', task => {
      task.increments('idtask').primary();
      // task.integer('house').notNullable().unsigned();
      task.foreign('house').references('house.idhouse');
      task.date('due').nullable();
      task.integer('parent').nullable().unsigned();
      task.boolean('done').defaultTo(0); 
      // task.integer('claimed_by').nullable().unsigned();
      task.foreign('claimed_by').references('user.iduser');
      // task.boolean('done').nullable();
      task.timestamps();      
    }).then(table => {
      console.log('Created table: ', table);
    });
  }
});



////////////////////////////////////////////////////////////////
// USER TABLE
////////////////////////////////////////////////////////////////

db.schema.hasTable('expense').then(exists => {
  if(!exists) {
    db.schema.createTable('expense', expense => {
      expense.increments('idexpense').primary();
      expense.string('name', 255).notNullable();
      expense.decimal('balance', 10, 2).notNullable();
      expense.integer('billing_month').notNullable();
      expense.date('due').nullable();
      expense.boolean('paid').defaultTo(0); 
      // expense.integer('house').notNullable().unsigned();
      expense.foreign('house').references('house.idhouse');
      expense.timestamps();      
    }).then(table => {
      console.log('Created table: ', table);
    });
  }
});



module.exports = db;
