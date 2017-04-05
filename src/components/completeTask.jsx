import React from 'react';

export default function CompletedTask(props) {
  const complete = props.tasks.complete;
  return (
    <div>
      <h1>
        Complete Tasks
      </h1>
      <ul>
        {complete.map(task => (
          <li key={task.id} onClick={() => { props.completeTask(task.id); }}>{task.value}</li>
          ), this)
        }
      </ul>
    </div>
  );
}
