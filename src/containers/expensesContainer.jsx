import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      <Grid fluid>
        <Row>
          <Col md={6}>
            <Paper style={this.styles.paper}>
              <MonthlyFinances roommates={this.props.roommates} expenses={this.props.expenses.currentMonth} />
            </Paper>
            <br />
            <Paper style={this.styles.paper}>
              <ExpensesGraph roommates={this.props.roommates} expenses={this.props.expenses} />
            </Paper>
          </Col>
          <Col md={6}>
            <Paper style={this.styles.paper}>
              <Payment total={this.state.billTotal} />
              <PaypalButton paypalAdmin={this.props.paypalAdmin} total={this.state.billTotal} />
            </Paper>
              <br />
            <Paper style={this.styles.paper}>
              <Summary roommates={this.props.roommates} bill={this.state.billTotal} handleOnToggle={this.handleOnToggle} expenses={this.props.expenses.currentMonth} />
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
  roommates: houseReducer.users.length
});

export default connect(
  mapStateToProps,
)(houseExpenses);
