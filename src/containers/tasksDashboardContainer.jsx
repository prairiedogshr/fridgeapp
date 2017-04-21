import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, completeTask, undoCompleteTask } from '../actions/task/task.js';
import AddTask from '../components/tasks/addTask';
import IncompleteTasks from '../components/tasks/incompleteTask.jsx';
import Paper from 'material-ui/Paper';
import Header from 'material-ui/Subheader';
import Info from 'material-ui/svg-icons/action/info';

class TasksDashboard extends Component {
  constructor(props) {
    super(props);
    this.incomplete = this.props.tasks.incomplete;
  }

  completeTask = (taskId) => {
    this.props.completeTask(taskId);
  };

  undoCompleteTask = (taskId) => {
    this.props.undoCompleteTask(taskId);
  };

  render() {
    if (this.incomplete.length) {
      return (
        <div className="col-md-4">
          <Paper className="paper-wrapper">
            <Header className="header-title">
              <h2>House</h2>
              <h3><Info style={{ fill: '#fff', width: 16, height: 16, verticalAlign: 'bottom' }} /> Click on an item to mark as done</h3>
            </Header>
            <IncompleteTasks
              completeTask={this.completeTask}
              tasks={this.props.tasks}
            />
            <AddTask
              addTask={this.props.addTask}
              house={this.props.user.house_in_user}
            />
          </Paper>
        </div>
      );
    } 
    return null;
  }
}


const mapStateToProps = ({ tasksReducer, userReducer }) => {
  return {
    tasks: tasksReducer,
    user: userReducer,
  }
};

export default connect(
  mapStateToProps,
  {
    addTask,
    completeTask,
    undoCompleteTask
  }
)(TasksDashboard)
