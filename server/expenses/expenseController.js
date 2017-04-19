const Expense = require('./expenseModel.js');

const getExpense = (req, res, next) => {
  Expense.getExpense(req.params.expense, (err, expense) => {
    if (err) {
      next(new Error(err));
    } else {
      res.send(expense);
    }
  });
};

const createExpense = (req, res, next) => {
  Expense.createExpense(req.body, (err, ok) => {
    if (err) {
      next(new Error(err));
    } else {
      res.redirect('/#/dashboard');
    }
  });
};

const updateExpense = (req, res, next) => {
  Expense.updateExpense(req.body, (err, expense) => {
    if (err) {
      next(new Error(err));
    } else {
      res.send(expense);
    }
  });
};

module.exports = { getExpense, createExpense, updateExpense };
