import React, { Component } from 'react';
import { connect } from 'react-redux';

class Homeless extends Component {

  render() {
    return (
      <div>
        <div><a href="#/" type="button">Button to join house</a></div>
        <div><a href="#/createhouse" type="button">Button to create house</a></div>
      </div>
    );
  }
}

export default connect()(Homeless);
