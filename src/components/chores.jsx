import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
// import { getChores } from '../actions';

class Chores extends Component {

  render() {
    const chores = this.props.chores.list;
    return (
      <div>
        <h1>
          Chores
        </h1>
        <ul>
          {chores.map( (chore, ind) => {
              return (
                <li key={ind}>{chore}</li>
              )
            }, this)
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({choresReducer}) => ({
  chores: choresReducer
})

export default connect(
  mapStateToProps
)(Chores)