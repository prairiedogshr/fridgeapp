import React from 'react';
import {List, ListItem} from 'material-ui/List';


export default function CompletedTask(props) {
  const complete = props.tasks.complete;
  if (complete.length) {
    return (
      <div>
        <h2>Complete Tasks</h2>
        <List>
          {complete.map(task => (
            <ListItem 
              primaryText={task.task_name}
              key={task.task_id} 
              onClick={() => { props.undoCompleteTask(task); }}
            />
            ))}
        </List>
      </div>
    );
  }
  return null;
}


