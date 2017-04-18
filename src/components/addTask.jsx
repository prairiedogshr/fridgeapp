import React, { Component } from 'react';

export default class AddTask extends Component {
  constructor(props) {
    super(props)
    this.taskName = '';
    this.taskCost = 0;
  }

  handleOnKeyUp(event) {
    this[event.target.id] = event.target.value
  }

  handleSubmit(event) {
    event.preventDefault();
    let task = {
      house_in_task: this.props.house,
      task_name: this.taskName,
    }
    this.props.addTask(task); 
    this.taskName = '';
    return true;   
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => {this.handleSubmit(event)}}>
          Task:<br />
        <input id="taskName" type="text" onKeyUp={(event) => {
          this.handleOnKeyUp(event)
        }}></input><br />
        <button type="submit">Submit</button>
        </form>      
      </div>
    );
  }
}

