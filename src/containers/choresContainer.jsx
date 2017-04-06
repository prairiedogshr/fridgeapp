import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import CompleteChore from '../components/completeChore';
import IncompleteChore from '../components/incompleteChore';
import AddChore from '../components/addChore';
import GroupChores from '../components/groupChores';
import { addChore, completeChore, undoComplete, increaseGroups, decreaseGroups } from '../actions';

class Chores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: '',
      choreGroups: 0,
    }
  }

  handleKeyUp = (e) => {
    if (e.which === 13) {
      this.props.addChore(this.state.inputField);
      e.target.value = '';
      this.state.inputField = '';
    } else {
      this.state.inputField = e.target.value;
    }
  }

  buttonSubmit = () => {
    this.props.addChore(this.state.inputField);
    this.state.inputField = '';
    console.log(AddChore.inputField);
  }

  completeChore = choreId => {
    this.props.completeChore(choreId);
  }

  undoComplete = choreId => {
    this.props.undoComplete(choreId);
  }

  // increaseGroups = () => {
  //   this.state.choreGroups++;
  // }

  // decreaseGroups = () => {
  //   this.state.choreGroups--;
  // }

  render() {
    const complete = this.props.chores.complete;
    const incomplete = this.props.chores.incomplete;

    return (
      <div>
        <AddChore
          handleKeyUp={this.handleKeyUp}
          buttonSubmit={this.buttonSubmit}
        />
        <CompleteChore
          chores={this.props.chores}
          completeChore={this.completeChore}
        />
        <IncompleteChore
          chores={this.props.chores}
          undoComplete={this.undoComplete}
        />
        <GroupChores
          chores={this.props.chores}
          increaseGroups={this.props.increaseGroups}
          decreaseGroups={this.props.decreaseGroups}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ choresReducer }) => ({
  chores: choresReducer
})

export default connect(
  mapStateToProps,
  {
    addChore,
    completeChore,
    undoComplete,
    increaseGroups,
    decreaseGroups,
  }
)(Chores);