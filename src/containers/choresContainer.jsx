import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import CompleteChore from '../components/chores/completeChore';
import AdminChores from '../components/chores/adminChores';
import AddChore from '../components/chores/addChore';
import GroupChores from '../components/chores/groupChores';
import GroupingOfChores from '../components/chores/groupingOfChores';
import {
  addChore,
  completeChore,
  undoComplete,
  increaseGroups,
  decreaseGroups,
  assignGroup,
} from '../actions/chore/chore';

class Chores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: '',
      nextClicked: false,
    }
  }


  // this is not working
  handleKeyUp = (e) => {
    if (e.which === 13) {
      this.props.addChore(this.state.inputField);
      e.target.value = '';
      this.state.inputField = '';
    } else {
      this.state.inputField = e.target.value;
    }
  };

  buttonSubmit = () => {
    console.log(this.state.inputField);
    let chore = {
        "house_in_chore": 1,
        "chore_name": this.state.inputField,
        "chore_due": "1491850731064",
        "chore_group": 1,
        "chore_parent": null,
        "chore_is_done": 0,
        "assigned_user_in_chore": "1"
    }
    this.props.addChore(chore);
    this.state.inputField = '';
    console.log(AddChore.inputField);
  };

  completeChore = choreId => {
    this.props.completeChore(choreId);
  };

  undoComplete = choreId => {
    this.props.undoComplete(choreId);
  };

  render() {
    const complete = this.props.chores.complete;
    const incomplete = this.props.chores.incomplete;

/*
        <CompleteChore
          chores={this.props.chores}
          undoComplete={this.undoComplete}
        />*/
    if (this.state.nextClicked === false) {
      return (
        <div>
          <AddChore
            handleKeyUp={this.handleKeyUp}
            buttonSubmit={this.buttonSubmit}
          />

          <AdminChores
            chores={this.props.chores}
          />
          <GroupChores
            chores={this.props.chores}
            increaseGroups={this.props.increaseGroups}
            decreaseGroups={this.props.decreaseGroups}
          />
          <button onClick={() => {this.state.nextClicked = true; this.forceUpdate(); console.log(this.state.nextClicked);}}>Next</button>
        </div>
      );
    } else {
      return (
        <div>
          <GroupingOfChores
            chores={this.props.chores}
            assignGroup={this.props.assignGroup}
          />
        </div>
      )
    }
  }
}

const mapStateToProps = ({ choresReducer }) => ({
  chores: choresReducer
});

export default connect(
  mapStateToProps,
  {
    addChore,
    completeChore,
    undoComplete,
    increaseGroups,
    decreaseGroups,
    assignGroup,
  }
)(Chores);
