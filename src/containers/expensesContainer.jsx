import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseMonth from '../components/expenses/currentMonth';
import CurrentMonthExpense from '../components/expenses/currentMonthExpenses';
import ExpensesGraph from '../components/expenses/expensesGraph';
import PaypalButton from '../components/expenses/paypalButton';

class houseExpenses extends Component {

  render() {
    return (
      <div className="container">
        <ExpensesGraph expenses={this.props.expenses} />
        <PaypalButton />
      </div>
    );
  }
}

const mapStateToProps = ({ expensesReducer }) => ({
  expenses: expensesReducer,
});

export default connect(
  mapStateToProps,
)(houseExpenses);
