import React from 'react';

export default function UncompletedChore(props) {
  const incomplete = props.chores.incomplete;
  return (
    <div>
      <h1>
        Chores
      </h1>
      <ul>
        {incomplete.map(chore => (
          <li key={chore.id}>{chore.value}</li>
          ), this)
        }
      </ul>
    </div>
  );
}
