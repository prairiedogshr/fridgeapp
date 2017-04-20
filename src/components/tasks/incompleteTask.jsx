import React, { Component } from 'react';
import { addTask, completeTask, undoCompleteTask } from '../../actions/task/task';
import {List, ListItem} from 'material-ui/List';

export default IncompleteTasks = (props) => {
  const incomplete = props.tasks.incomplete;
  if (incomplete.length) {
    return (
      <div>
        <h2>Incomplete Tasks!</h2>
        <List>
          {incomplete.map(task => (
            <ListItem 
              primaryText={task.task_name}
              key={task.task_id} 
              onClick={() => {props.completeTask(task); }}
            />
          ))}
        </List>
      </div>
    );
  } 
  return null;
}

