import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addChore } from '../actions';

class Chores extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choreInput: ""
    }
  }

  handleSubmit = e => {
    if (e.which === 13) {
      this.props.addChore(e.target.value);
      e.target.value = '';
    }
  }

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
        <h3>
          Add Chore
        </h3>
        <input
          type="text"
          placeholder=""
          autoFocus="true"
          onKeyDown={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = ({choresReducer}) => ({
  chores: choresReducer
})

export default connect(
  mapStateToProps,
  {
    addChore
  }
)(Chores)