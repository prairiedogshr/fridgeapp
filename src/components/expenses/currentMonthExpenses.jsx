import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class CurrentMonthExpense extends Component {

  constructor(props) {
    super(props);
    this.state = { expenses: 'Loading' };
  }

  componentWillMount() {
    axios.get(`/api/expenses/${this.props.id}`)
    .then((data) => {
      this.setState({ expenses: data.data.expense_balance });
    });
  }

  // getHouse(id) {
  //   axios.get(`/api/expenses/${id}`)
  //   .then((data) => {
  //     expenses = data.data.expense_balance
  //   });
  // }

  render() {
    return (
      <h1>{this.state.expenses}</h1>
    );
  }
}

export default connect()(CurrentMonthExpense);
