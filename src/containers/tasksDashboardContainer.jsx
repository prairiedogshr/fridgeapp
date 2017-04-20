import React, { Component } from 'react';
import { addTask, completeTask, undoCompleteTask } from '../actions/task/task.js';
import AddTask from '../components/addTask';
import IncompleteTasks from '../components/tasks/incompleteTask.jsx';
import { connect } from 'react-redux';


class TasksDashboard extends Component {
  constructor(props) {
    super(props)
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
        <div>
          <h1>
            House Tasks
          </h1>
          <AddTask addTask={this.props.addTask} house={this.props.user.house_in_user} />
          <IncompleteTasks completeTask={this.completeTask} tasks={this.props.tasks} />
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
}

export default connect(
  mapStateToProps,
  {
    addTask,
    completeTask,
    undoCompleteTask
  }
  )(TasksDashboard)
