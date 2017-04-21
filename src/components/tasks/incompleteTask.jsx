import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Feedback from 'material-ui/svg-icons/action/feedback';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import { addTask, completeTask, undoCompleteTask } from '../../actions/task/task';

export default IncompleteTasks = (props) => {
  const incomplete = props.tasks.incomplete;
  if (incomplete.length) {
    return (
      <div>
        <List>
          {incomplete.map(task => (
            <ListItem
              primaryText={task.task_name}
              key={task.task_id}
              leftIcon={<Feedback />}
              rightIcon={<CheckCircle style={{ fill: '#551a8b', width: 16, height: 16, top: 4 }} />}
              onClick={() => { props.completeTask(task); }}
            />
          ))}
        </List>
      </div>
    );
  }
  return null;
};
