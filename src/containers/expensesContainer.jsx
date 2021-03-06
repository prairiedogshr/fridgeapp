import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpensesGraph from '../components/expenses/expensesGraphRechart';
import PaypalButton from '../components/expenses/paypalButton';
import Summary from '../components/expenses/summary';
import MonthlyFinances from '../components/expenses/MonthlyFinances';
import Payment from '../components/expenses/payment';
import Paper from 'material-ui/Paper';

class houseExpenses extends Component {
  constructor(props) {
    super(props)

    this.state = {
      billTotal: 0,
    };

    this.selectedBills = [];

    this.styles = {
      paper: {
        padding: 16,
        overflow: 'auto',
      },
    };
  };

  handleOnToggle = (event) => {
    if (event === 'all') {
      this.setState({
        billTotal: this.props.expenses.currentMonth.reduce((all, item) => {
          all += item.expense_balance / this.props.roommates;
          return all;
        },0)
      })
    } else if (event === 'none') {
      this.setState({
        billTotal: 0,
      })
    } else if (event.length) {
      this.setState({
        billTotal: event.reduce((all, item) => {
          all += this.props.expenses.currentMonth[item].expense_balance / this.props.roommates;
          return all;
        },0)
      })
    } else {
      this.setState({
        billTotal: 0
      })
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <Paper className="paper-wrapper">
              <MonthlyFinances roommates={this.props.roommates} expenses={this.props.expenses.currentMonth} />
            </Paper>
            <Paper className="paper-wrapper">
              <ExpensesGraph roommates={this.props.roommates} expenses={this.props.expenses} />
            </Paper>
          </div>
          <div className="col-md-6">
            <Paper className="paper-wrapper">
              <Payment total={this.state.billTotal} />
              <PaypalButton paypalAdmin={this.props.paypalAdmin} total={this.state.billTotal} />
            </Paper>
            <Paper className="paper-wrapper">
              <Summary roommates={this.props.roommates} bill={this.state.billTotal} handleOnToggle={this.handleOnToggle} expenses={this.props.expenses.currentMonth} />
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ expensesReducer, houseReducer }) => ({
  expenses: expensesReducer,
  paypalAdmin: houseReducer.house_account,
  roommates: houseReducer.users.length
});

export default connect(
  mapStateToProps,
)(houseExpenses);
