import React from 'react';

export default function CompletedChore(props) {
  const complete = props.chores.complete;
  return (
    <div>
      <h1>
        Complete Chores
      </h1>
      <ul>
        {complete.map(chore => (
          <li key={chore.id} onClick={() => { props.completeChore(chore.id); }}>{chore.value}</li>
          ), this)
        }
      </ul>
    </div>
  );
}
