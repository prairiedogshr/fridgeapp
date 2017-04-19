import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, completeTask, undoCompleteTask } from '../actions/task/task';
import CompleteTask from '../components/tasks/completeTask';
import IncompleteTask from '../components/tasks/incompleteTask';
import AddTask from '../components/addTask';
import { Row, Col, Grid } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';

class Tasks extends Component {

  completeTask = (taskId) => {
    console.log('completing ', taskId)
    this.props.completeTask(taskId);
  };

  undoCompleteTask = (taskId) => {
    this.props.undoCompleteTask(taskId);
  };

  render() {
    return (
      <Grid fluid>
        <Row center={'xs'}>
          <Col xs={12}>
            <AddTask addTask={this.props.addTask} house={this.props.user.house_in_user}
            />
          </Col>
        </Row>
        <Row between={'xs'}>
          <Col xs={4}>
            <IncompleteTask
              tasks={this.props.tasks}
              completeTask={this.completeTask}
            />
          </Col>
          <Col xs={4}>
            <CompleteTask
              tasks={this.props.tasks}
              undoCompleteTask={this.undoCompleteTask}
            />
          </Col>
        </Row>
      </Grid>
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
