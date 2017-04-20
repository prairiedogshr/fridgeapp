import React from 'react';


export default function CompletedTask(props) {
  const complete = props.tasks.complete;
  if (complete.length) {
    return (
      <div>
        <h1>
          Complete Tasks
        </h1>
        <ul>
          {complete.map(task => (
            <li key={task.task_id} onClick={() => { props.undoCompleteTask(task); }}>{task.task_name}</li>
            ), this)
          }
        </ul>
      </div>
    );
  }
  return null;
}


