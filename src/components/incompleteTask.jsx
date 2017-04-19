import React from 'react';

export default function IncompletedTask(props) {
  const incomplete = props.tasks.incomplete;
  if (incomplete.length) {
    return (
      <div>
        <h1>
          Incomplete Tasks
        </h1>
        <ul>
          {incomplete.map(task => (
            <li key={task.task_id} onClick={() => { props.completeTask(task); }}>{task.task_name} ${task.expense_in_task || 0}</li>
            ), this)
          }
        </ul>
      </div>
    );
  }
  return null;
}
