import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, completeTask, undoCompleteTask } from '../actions/task/task';
import CompleteTask from '../components/completeTask';
import IncompleteTask from '../components/incompleteTask';
import AddTask from '../components/addTask';

class Tasks extends Component {

  completeTask = taskId => {
    this.props.completeTask(taskId);
  };
//
  undoCompleteTask = taskId => {
    this.props.undoCompleteTask(taskId);
  };
//
//   render() {
//     const complete = this.props.tasks.complete;
//     const incomplete = this.props.tasks.incomplete;
//
//     return (
//       <div>
//         <CompleteTask
//           tasks={this.props.tasks}
//           completeTask={this.completeTask}
//         />
//         <IncompleteTask
//           tasks={this.props.tasks}
//           undoCompleteTask={this.undoCompleteTask}
//         />
//         <AddTask
//           handleSubmit={this.handleSubmit}
//         />
//       </div>
//     )
//   }
// }

  render() {
    return (
      <div>
        <IncompleteTask
          tasks={this.props.tasks}
          completeTask={this.completeTask}
        />
        <CompleteTask
          tasks={this.props.tasks}
          undoCompleteTask={this.undoCompleteTask}
        />
        <AddTask addTask={this.props.addTask} house={this.props.user.house_in_user}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ tasksReducer, userReducer }) => ({
  tasks: tasksReducer,
  user: userReducer,
});

export default connect(
  mapStateToProps,
  {
    addTask,
    completeTask,
    undoCompleteTask
  }
)(Tasks);
