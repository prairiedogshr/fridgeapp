import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class CurrentMonthExpense extends Component {

  constructor(props) {
    super(props);
    this.state = { expenses: 'Loading' };
  }

  componentWillMount() {
    console.log('hhhmmm ', this.props)
    axios.get(`/api/expenses/${this.props.id}`)
    .then((data) => {
      console.log(data);
      this.setState({ expenses: data.data.expense_balance });
      console.log('COMPONENT WILL MOUNT', this.state.expenses);
    });
  }

  // getHouse(id) {
  //   axios.get(`/api/expenses/${id}`)
  //   .then((data) => {
  //     console.log(data);
  //     expenses = data.data.expense_balance
  //   });
  // }

  render() {
    console.log('RENDER', this.state.expenses);
    return (
      <h1>{this.state.expenses}</h1>
    );
  }
}

export default connect()(CurrentMonthExpense);
