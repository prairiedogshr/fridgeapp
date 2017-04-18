import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseMonth from '../components/expenses/currentMonth';
import CurrentMonthExpense from '../components/expenses/currentMonthExpenses';
import ExpensesGraph from '../components/expenses/expensesGraphRechart';
import PaypalButton from '../components/expenses/paypalButton';
import Summary from '../components/expenses/summary';
import MonthlyFinances from '../components/expenses/MonthlyFinances';
import Payment from '../components/expenses/payment';
import { Row, Col, Grid } from 'react-flexbox-grid';
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
    console.log('paypal!!!!!! ', this.props.paypalAdmin)
    // setInterval(() => {
    //   console.log(this.state)
    // },2000)
  };

  handleOnToggle = (event) => {
    console.log('event! ', event)
    if (event === 'all') {
      this.setState({
        billTotal: this.props.expenses.reduce((all, item) => {
          all += item.expense_balance;
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
          all += this.props.expenses[item].expense_balance;
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
      <Grid fluid>
        <Row>
          <Col xs={6}>
            <Paper style={this.styles.paper}>
              <ExpensesGraph expenses={this.props.expenses} />
            </Paper>
            <br />
            <Paper style={this.styles.paper}>
            <MonthlyFinances expenses={this.props.expenses} />
            </Paper>
          </Col>
          <Col xs={6}>
            <Paper style={this.styles.paper}>
              <Payment total={this.state.billTotal} />
              <PaypalButton paypalAdmin={this.props.paypalAdmin} total={this.state.billTotal} />
            </Paper>
              <br />
            <Paper style={this.styles.paper}>  
              <Summary bill={this.state.billTotal} handleOnToggle={this.handleOnToggle} expenses={this.props.expenses} />
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = ({ expensesReducer, houseReducer }) => ({
  expenses: expensesReducer,
  paypalAdmin: houseReducer.house_account,
});

export default connect(
  mapStateToProps,
)(houseExpenses);
