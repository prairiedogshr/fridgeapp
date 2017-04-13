import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseMonth from '../components/expenses/currentMonth.jsx';
import CurrentMonthExpense from '../components/expenses/currentMonthExpenses.jsx';
import ExpensesGraph from '../components/expenses/expensesGraph.jsx';

class houseExpenses extends Component {

  render() {
  var sampleData = [
  {id: '5fbmzmtc', x: 7, y: 41, z: 6},
  {id: 's4f8phwm', x: 11, y: 45, z: 9}
  ]

  var domain = {x: [0, 30], y: [0, 100]}


    console.log(this.props)
    return (
      <div>
        <ExpensesGraph expenses={this.props.expenses}/>
      </div>
    );
  }
}

const mapStateToProps = ({ expensesReducer }) => ({
  expenses: expensesReducer
});

export default connect(
  mapStateToProps,
)(houseExpenses);
