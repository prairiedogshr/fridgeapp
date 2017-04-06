
// =============================================================
// LOCAL DATABASE CONFIGURATION
// =============================================================

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'fridge',
  },
});


// =============================================================
// REMOTE DATABASE CONFIGURATION: AWS RDS
// =============================================================

// require('dotenv').config();

// const knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host: process.env.DB_SERVER,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//   },
//   useNullAsDefault: true,
// });

const db = require('bookshelf')(knex);


// =============================================================
// USER TABLE
// =============================================================

db.knex.schema.hasTable('user').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('user', (user) => {
      user.increments('user_id').primary();
      user.string('user_first_name', 30).notNullable();
      user.string('user_last_name', 30).notNullable();
      user.string('user_email', 100).notNullable();
      user.string('user_username', 16).notNullable();
      user.string('user_password', 255).notNullable();
      user.string('user_phone', 10).notNullable();
      user.integer('house_in_user').nullable().unsigned();
      user.foreign('house_in_user').references('house.idhouse');
      user.boolean('user_is_admin').defaultTo(0);
      user.text('user_info').nullable();
      user.timestamps();
    }).then((table) => {
      console.log('Created user table: \n', table);
    });
  }
});


// =============================================================
// HOUSE TABLE
// =============================================================

db.knex.schema.hasTable('house').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('house', (house) => {
      house.increments('house_id').primary();
      house.integer('admin_user_in_house').notNullable().unsigned();
      house.foreign('admin_user_in_house').references('user.user_id');
      house.string('house_address', 255).notNullable();
      house.string('house_unit_number', 30).nullable();
      house.string('house_city', 100).notNullable();
      house.string('house_state', 2).notNullable();
      house.string('house_zip', 5).notNullable();
      house.text('house_info').nullable();
      house.timestamps();
    }).then((table) => {
      console.log('Created house table: \n', table);
    });
  }
});


// =============================================================
// CHORE TABLE
// =============================================================

db.knex.schema.hasTable('chore').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('chore', (chore) => {
      chore.increments('chore_id').primary();
      chore.integer('house_in_chore').notNullable().unsigned();
      chore.foreign('house_in_chore').references('house.house_id');
      chore.date('chore_due').nullable();
      chore.integer('chore_group').nullable().unsigned();
      chore.integer('chore_parent').nullable().unsigned();
      chore.boolean('chore_is_done').defaultTo(0);
      chore.integer('assigned_to_user_in_chore').nullable().unsigned();
      chore.foreign('assigned_to_user_in_chore').references('user.user_id');
      chore.timestamps();
    }).then((table) => {
      console.log('Created chore table: \n', table);
    });
  }
});


// =============================================================
// TASK TABLE
// =============================================================

db.knex.schema.hasTable('task').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('task', (task) => {
      task.increments('task_id').primary();
      task.integer('house_in_task').notNullable().unsigned();
      task.foreign('house_in_task').references('house.house_id');
      task.integer('claimed_by_user_in_task').nullable().unsigned();
      task.foreign('claimed_by_user_in_task').references('user.user_id');
      task.boolean('task_is_done').defaultTo(0);
      task.timestamps();
    }).then((table) => {
      console.log('Created task table: \n', table);
    });
  }
});


// =============================================================
// EXPENSE TABLE
// =============================================================

db.knex.schema.hasTable('expense').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('expense', (expense) => {
      expense.increments('expense_id').primary();
      expense.string('expense_name', 255).notNullable();
      expense.decimal('expense_balance', 10, 2).notNullable();
      expense.integer('expense_billing_month').notNullable();
      expense.date('expense_due').nullable();
      expense.boolean('expense_is_paid').defaultTo(0);
      expense.integer('house_in_expense').notNullable().unsigned();
      expense.foreign('house_in_expense').references('house.house_id');
      expense.timestamps();
    }).then((table) => {
      console.log('Created expense table: \n', table);
    });
  }
});


module.exports = db.knex;
