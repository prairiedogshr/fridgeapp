import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import CompleteChore from '../components/chores/completeChore';
import IncompleteChore from '../components/chores/incompleteChore';
import { completeChore, undoComplete } from '../actions/chore/chore';
import Paper from 'material-ui/Paper';
import Header from 'material-ui/Subheader';
import Info from 'material-ui/svg-icons/action/info';

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
      <Paper className="paper-wrapper">
        <Header className="header-title">
          <h2>Your Chores</h2>
          <h3><Info style={{ fill: '#fff', width: 16, height: 16, verticalAlign: 'bottom' }} /> Click on an item to mark as done</h3>
        </Header>
        <IncompleteChore
          chores={this.props.chores}
          completeChore={this.completeChore}
        />
        <CompleteChore
          chores={this.props.chores}
          undoComplete={this.undoComplete}
        />
      </Paper>
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
