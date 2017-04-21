import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Feedback from 'material-ui/svg-icons/action/feedback';
import CheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';

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
              rightIcon={<CheckBoxOutlineBlank />}
              onClick={() => { props.completeTask(task); }}
            />
          ))}
        </List>
      </div>
    );
  }
  return null;
};
