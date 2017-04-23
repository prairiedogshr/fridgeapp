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
            <li
              key={task.task_id}
              style={{textDecoration: 'line-through', listStyle: 'none', padding: 0 }}
              onClick={() => {
                props.undoCompleteTask(task); }}
              >
              <ListItem
                rightIcon={<CheckBox style={{ fill: '#551a8b' }} />}
              >{task.task_name}</ListItem>
            </li>
          ))}
        </List>
      </div>
    );
  }
  return null;
}
