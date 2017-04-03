import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addChore, completeChore, undoComplete } from '../actions';

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

  completeChore = choreId => {
    console.log('+++++++++++++', choreId);
    this.props.completeChore(choreId);
  }

  undoComplete = choreId => {
    console.log('-------------', choreId);
    this.props.undoComplete(choreId);
  }

  render() {
    const complete = this.props.chores.complete;
    const incomplete = this.props.chores.incomplete;
    return (
      <div>
        <h1>
          Complete Chores
        </h1>
        <ul>
          {complete.map( (chore, ind) => {
              return (
                <li key={chore.id} onClick={ ()=>{this.completeChore(chore.id)} }>{chore.value}</li>
              )
            }, this)
          }
        </ul>
        <h1>
          Incomplete Chores
        </h1>
        <ul>
          {incomplete.map( (chore, ind) => {
              return (
                <li key={chore.id} onClick={ ()=>{this.undoComplete(chore.id)} }>{chore.value}</li>
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
    addChore,
    completeChore,
    undoComplete
  }
)(Chores)