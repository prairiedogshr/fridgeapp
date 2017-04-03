var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_SERVER,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  useNullAsDefault: true
});
var db = require('bookshelf')(knex);



////////////////////////////////////////////////////////////////
// USER TABLE
////////////////////////////////////////////////////////////////

db.knex.schema.hasTable('user').then(function(exists) {
  if(!exists) {
    db.knex.schema.createTable('user', function(user) {
      user.increments('iduser').primary();
      user.string('first_name', 30).notNullable();
      user.string('last_name', 30).notNullable();
      user.string('email', 100).notNullable();
      user.string('username', 16).notNullable();
      user.string('password', 32).notNullable();
      user.string('phone', 10).notNullable();
      user.integer('house').nullable().unsigned();
      user.foreign('house').references('house.idhouse');
      user.boolean('admin').defaultTo(0); 
      user.text('info').nullable();
      user.timestamps();
    }).then(function (table) {
      console.log('Created table: ', table);
    });
  }
});



////////////////////////////////////////////////////////////////
// HOUSE TABLE
////////////////////////////////////////////////////////////////

db.knex.schema.hasTable('house').then(function(exists) {
  if(!exists) {
    db.knex.schema.createTable('house', function(house) {
      user.increments('idhouse').primary();
      user.integer('admin').notNullable().unsigned();
      user.foreign('admin').references('user.iduser');
      user.string('address', 255).notNullable();
      user.string('unit_number', 30).nullable();
      user.string('city', 100).notNullable();
      user.string('state', 2).notNullable();
      user.string('zip', 5).notNullable();
      user.text('info').nullable();
      user.timestamps();      
    }).then(function(table) {
      console.log('Created table: ', table);
    });
  }
});



////////////////////////////////////////////////////////////////
// CHORE TABLE
////////////////////////////////////////////////////////////////

db.knex.schema.hasTable('chore').then(function(exists) {
  if(!exists) {
    db.knex.schema.createTable('chore', function(chore) {
      user.increments('idchore').primary();
      user.integer('house').notNullable().unsigned();
      user.foreign('house').references('house.idhouse');
      user.integer('assigned_to').nullable().unsigned();
      user.foreign('assigned_to').references('user.iduser');
      user.boolean('done').defaultTo(0); 
      user.timestamps();      
    }).then(function(table) {
      console.log('Created table: ', table);
    });
  }
});



////////////////////////////////////////////////////////////////
// TASK TABLE
////////////////////////////////////////////////////////////////

db.knex.schema.hasTable('task').then(function(exists) {
  if(!exists) {
    db.knex.schema.createTable('task', function(task) {
      user.increments('idtask').primary();
      user.integer('house').notNullable().unsigned();
      user.foreign('house').references('house.idhouse');
      user.date('due').nullable();
      user.integer('parent').nullable().unsigned();
      user.boolean('done').defaultTo(0); 
      user.integer('claimed_by').nullable().unsigned();
      user.foreign('claimed_by').references('user.iduser');
      user.boolean('done').nullable();
      user.timestamps();      
    }).then(function(table) {
      console.log('Created table: ', table);
    });
  }
});



////////////////////////////////////////////////////////////////
// USER TABLE
////////////////////////////////////////////////////////////////

db.knex.schema.hasTable('expense').then(function(exists) {
  if(!exists) {
    db.knex.schema.createTable('expense', function(expense) {
      user.increments('idexpense').primary();
      user.string('name', 255).notNullable();
      user.decimal('balance', 10, 2).notNullable();
      user.integer('billing_month').notNullable();
      user.date('due').nullable();
      user.boolean('paid').defaultTo(0); 
      user.integer('house').notNullable().unsigned();
      user.foreign('house').references('house.idhouse');
      user.timestamps();      
    }).then(function(table) {
      console.log('Created table: ', table);
    });
  }
});



module.exports = db;
