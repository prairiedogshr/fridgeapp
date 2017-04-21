import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.taskName = '';
  }

  handleOnKeyUp(event) {
    this.taskName = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    let task = {
      house_in_task: this.props.house,
      task_name: this.taskName,
    };
    this.props.addTask(task);
    document.getElementById('taskName').value = '';
    return true;
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {this.handleSubmit(e)}}>
          <TextField
            id="taskName"
            hintText="Add a Task"
            floatingLabelText="Add a Task"
            fullWidth={true}
            onKeyUp={(e) => {this.handleOnKeyUp(e)}}
          />
          <br />
          <FlatButton
            style={{ color: 'white', backgroundColor: 'grey' }}
            hoverColor="tomato"
            fullWidth={false}
            type="submit"
          >Submit</FlatButton>
        </form>
      </div>
    );
  }
}
