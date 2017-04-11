import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import CompleteChore from '../components/chores/completeChore';
import IncompleteChore from '../components/chores/incompleteChore';
import {
  completeChore,
  undoComplete,
} from '../actions/chore/chore';

class ChoresDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: '',
      nextClicked: false,
    }
  }

  completeChore = choreId => {
    this.props.completeChore(choreId);
  };

  undoComplete = choreId => {
    this.props.undoComplete(choreId);
  };

  render() {
    const complete = this.props.chores.complete;
    const incomplete = this.props.chores.incomplete;

    return (
      <div>
        <h1>
          Your Chores
        </h1>
        <IncompleteChore
          chores={this.props.chores}
          completeChore={this.completeChore}
        />
        <CompleteChore
          chores={this.props.chores}
          undoComplete={this.undoComplete}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ choresReducer }) => ({
  chores: choresReducer
});

export default connect(
  mapStateToProps,
  {
    completeChore,
    undoComplete,
  }
)(ChoresDashboard);
