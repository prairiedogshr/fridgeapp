import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, completeTask, undoCompleteTask } from '../actions/task/task';
import CompleteTask from '../components/completeTask.jsx';
import IncompleteTask from '../components/incompleteTask.jsx';
import AddTask from '../components/addTask.jsx';

class Tasks extends Component {

  handleSubmit = e => {
    if (e.which === 13) {
      this.props.addTask(e.target.value);
      e.target.value = '';
    }
  };

  completeTask = taskId => {
    this.props.completeTask(taskId);
  };

  undoCompleteTask = taskId => {
    this.props.undoCompleteTask(taskId);
  };

  render() {
    console.log('++++++++', this.props);
    const complete = this.props.tasks.complete;
    const incomplete = this.props.tasks.incomplete;

    return (
      <div>
        <CompleteTask
          tasks={this.props.tasks}
          completeTask={this.completeTask}
        />
        <IncompleteTask
          tasks={this.props.tasks}
          undoCompleteTask={this.undoCompleteTask}
        />
        <AddTask
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ tasksReducer }) => ({
  tasks: tasksReducer
});

export default connect(
  mapStateToProps,
  {
    addTask,
    completeTask,
    undoCompleteTask
  }
)(Tasks);
