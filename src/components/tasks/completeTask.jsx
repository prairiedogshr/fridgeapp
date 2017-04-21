import React from 'react';
import { List, ListItem } from 'material-ui/List';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';

export default function CompletedTask(props) {
  const complete = props.tasks.complete;
  if (complete.length) {
    return (
      <div>
        <List>
          {complete.map(task => (
            <ListItem
              key={task.task_id}
              primaryText={task.task_name}
              rightIcon={<CheckBox style={{ fill: '#551a8b' }} />}
              onClick={() => {
                props.undoCompleteTask(task);
              }}
            />
          ))}
        </List>
      </div>
    );
  }
  return null;
}
