import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseMonth from '../components/expenses/currentMonth.jsx';
import CurrentMonthExpense from '../components/expenses/currentMonthExpenses.jsx';

class houseExpenses extends Component {
  render() {
    console.log(this.props.house)
    return (
      <div>
        <ExpenseMonth />
        <CurrentMonthExpense id={this.props.house.house_id}/>
      </div>
    );
  }
}

const mapStateToProps = ({ houseReducer }) => ({
  house: houseReducer
});

export default connect(
  mapStateToProps,
)(houseExpenses);
