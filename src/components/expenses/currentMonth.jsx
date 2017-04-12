import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExpenseMonth extends Component {

  render() {
    const d = new Date();
    const month = [];
    month[0] = 'January';
    month[1] = 'February';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'August';
    month[8] = 'September';
    month[9] = 'October';
    month[10] = 'November';
    month[11] = 'December';
    const m = month[d.getMonth()];

    return (
      <h1> {m} </h1>
    );
  }
}

export default connect()(ExpenseMonth);
