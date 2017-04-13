import React from 'react';

export default function IncompletedTask(props) {
  const incomplete = props.tasks.incomplete;
  if (incomplete) {
    return (
      <div>
        <h1>
          Incomplete Tasks
        </h1>
        <ul>
          {incomplete.map(task => (
            <li key={task.id} onClick={() => { props.undoCompleteTask(task.id); }}>{task.value}</li>
            ), this)
          }
        </ul>
      </div>
    );
  }
  return null;
}
