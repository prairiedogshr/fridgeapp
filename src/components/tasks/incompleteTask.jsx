import React, { Component } from 'react';
import { addTask, completeTask, undoCompleteTask } from '../../actions/task/task';
import { connect } from 'react-redux';

export default IncompleteTasks = (props) => {
  console.log('props? ', props)
  const incomplete = props.tasks.incomplete;
  if (incomplete.length) {
    return (
      <div>
        <h1>
          House Tasks
        </h1>
          <ul>
          {incomplete.map(task => (
            <li key={task.task_id} onClick={() => {props.completeTask(task); }}>{task.task_name}</li>
            ), this)
          }
        </ul>
      </div>
    );
  } 
  return null;
}

