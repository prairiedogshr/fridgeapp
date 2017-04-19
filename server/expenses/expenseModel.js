const db = require('../config/config.js');

const getExpense = (expenseId, callback) => {
  db.select().from('expense').where('expense_id', expenseId)
    .then((expense) => {
      callback(null, expense[0]);
    })
    .catch((err) => {
      callback(err);
    });
};

const createExpense = (expense, callback) => {
  db('expense').insert({
    house_in_expense: expense.house_in_expense,
    expense_name: expense.expense_name,
    expense_balance: expense.expense_balance,
    expense_billing_month: expense.expense_billing_month,
    expense_due: expense.expense_due,
    expense_is_paid: expense.expense_is_paid,
    expense_is_one_time: expense.expense_is_one_time,
  })
    .then((newExpense) => {
      callback(null, newExpense);
    })
    .catch((err) => {
      callback(err);
    });
};

const updateExpense = (update, callback) => {
  db('expense').where('expense_id', update.id).update({
    [update.key]: update.value,
  })
    .then((updated) => {
      callback(null, true);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports = { getExpense, createExpense, updateExpense };
