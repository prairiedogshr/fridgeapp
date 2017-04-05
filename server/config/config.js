const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_SERVER,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  useNullAsDefault: true,
});
const db = require('bookshelf')(knex);


// =============================================================
// USER TABLE
// =============================================================

db.knex.schema.hasTable('user').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('user', (user) => {
      user.increments('iduser').primary();
      user.string('first_name', 30).notNullable();
      user.string('last_name', 30).notNullable();
      user.string('email', 100).notNullable();
      user.string('username', 16).notNullable();
      user.string('password', 32).notNullable();
      user.string('phone', 10).notNullable();
      user.integer('house_in_user').nullable().unsigned();
      user.foreign('house_in_user').references('house.idhouse');
      user.boolean('admin').defaultTo(0);
      user.text('info').nullable();
      user.timestamps();
    }).then((table) => {
      console.log('Created table: ', table);
    });
  }
});


// =============================================================
// HOUSE TABLE
// =============================================================

db.knex.schema.hasTable('house').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('house', (house) => {
      user.increments('idhouse').primary();
      user.integer('admin_user_in_house').notNullable().unsigned();
      user.foreign('admin_user_in_house').references('user.iduser');
      user.string('address', 255).notNullable();
      user.string('unit_number', 30).nullable();
      user.string('city', 100).notNullable();
      user.string('state', 2).notNullable();
      user.string('zip', 5).notNullable();
      user.text('info').nullable();
      user.timestamps();
    }).then((table) => {
      console.log('Created table: ', table);
    });
  }
});


// =============================================================
// CHORE TABLE
// =============================================================

db.knex.schema.hasTable('chore').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('chore', (chore) => {
      user.increments('idchore').primary();
      user.integer('house_in_chore').notNullable().unsigned();
      user.foreign('house_in_chore').references('house.idhouse');
      user.integer('assigned_user_in_chore').nullable().unsigned();
      user.foreign('assigned_user_in_chore').references('user.iduser');
      user.boolean('done').defaultTo(0);
      user.timestamps();
    }).then((table) => {
      console.log('Created table: ', table);
    });
  }
});


// =============================================================
// TASK TABLE
// =============================================================

db.knex.schema.hasTable('task').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('task', (task) => {
      user.increments('idtask').primary();
      user.integer('house_in_task').notNullable().unsigned();
      user.foreign('house_in_task').references('house.idhouse');
      user.date('due').nullable();
      user.integer('parent').nullable().unsigned();
      user.boolean('done').defaultTo(0);
      user.integer('claimed_user_in_task').nullable().unsigned();
      user.foreign('claimed_user_in_task').references('user.iduser');
      user.boolean('done').nullable();
      user.timestamps();
    }).then((table) => {
      console.log('Created table: ', table);
    });
  }
});


// =============================================================
// USER TABLE
// =============================================================

db.knex.schema.hasTable('expense').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('expense', (expense) => {
      user.increments('idexpense').primary();
      user.string('name', 255).notNullable();
      user.decimal('balance', 10, 2).notNullable();
      user.integer('billing_month').notNullable();
      user.date('due').nullable();
      user.boolean('paid').defaultTo(0);
      user.integer('house_in_expense').notNullable().unsigned();
      user.foreign('house_in_expense').references('house.idhouse');
      user.timestamps();
    }).then((table) => {
      console.log('Created table: ', table);
    });
  }
});


module.exports = db;
