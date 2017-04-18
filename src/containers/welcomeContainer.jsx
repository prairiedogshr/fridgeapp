import React, { Component } from 'react';
import { connect } from 'react-redux';

class Welcome extends Component {

  render() {
    return (
      <div>
        <div><a href="/join" type="button">Button to join house</a></div>
        <div><a href="/createhouse" type="button">Button to create house</a></div>
      </div>
    );
  }
}

export default connect()(Welcome);
