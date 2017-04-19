import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import CompleteChore from '../components/chores/completeChore';
import IncompleteChore from '../components/chores/incompleteChore';
import {
  completeChore,
  undoComplete,
} from '../actions/chore/chore';

import {List, ListItem} from 'material-ui/List';
import Header from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

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
        <Header>
          Your Chores
        </Header>
        <Divider />
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
