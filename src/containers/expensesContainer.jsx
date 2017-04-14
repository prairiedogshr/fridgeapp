import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseMonth from '../components/expenses/currentMonth.jsx';
import CurrentMonthExpense from '../components/expenses/currentMonthExpenses.jsx';
import ExpensesGraph from '../components/expenses/expensesGraph.jsx';
import PaypalButton from '../components/expenses/paypalButton.jsx';

class houseExpenses extends Component {

  render() {

    return (
      <div className="container">
        <ExpensesGraph expenses={this.props.expenses} />
        <PaypalButton />
      </div>
      )
  }
}

const mapStateToProps = ({ expensesReducer }) => ({
  expenses: expensesReducer
});

export default connect(
  mapStateToProps,
)(houseExpenses);
