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
      user.string('password', 255).notNullable();
      user.string('phone', 10).notNullable();
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
      house.increments('idhouse').primary();
      house.foreign('admin_user_in_house').references('user.iduser');
      house.string('address', 255).notNullable();
      house.string('unit_number', 30).nullable();
      house.string('city', 100).notNullable();
      house.string('state', 2).notNullable();
      house.string('zip', 5).notNullable();
      house.text('info').nullable();
      house.timestamps();
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
      chore.increments('idchore').primary();
      chore.foreign('house_in_chore').references('house.idhouse');
      chore.foreign('assigned_user_in_chore').references('user.iduser');
      chore.boolean('done').defaultTo(0);
      chore.timestamps();
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
      task.increments('idtask').primary();
      task.foreign('house_in_task').references('house.idhouse');
      task.date('due').nullable();
      task.integer('parent').nullable().unsigned();
      task.boolean('done').defaultTo(0);
      task.foreign('claimed_user_in_task').references('user.iduser');
      task.boolean('done').nullable();
      task.timestamps();
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
      expense.increments('idexpense').primary();
      expense.string('name', 255).notNullable();
      expense.decimal('balance', 10, 2).notNullable();
      expense.integer('billing_month').notNullable();
      expense.date('due').nullable();
      expense.boolean('paid').defaultTo(0);
      expense.foreign('house_in_expense').references('house.idhouse');
      expense.timestamps();
    }).then((table) => {
      console.log('Created table: ', table);
    });
  }
});


module.exports = db;
