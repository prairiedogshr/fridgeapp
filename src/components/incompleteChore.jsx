import React from 'react';

export default function UncompletedChore(props) {
  const incomplete = props.chores.incomplete;
  return (
    <div>
      <h1>
        Incomplete Chores
      </h1>
      <ul>
        {incomplete.map(chore => (
          <li key={chore.id} onClick={() => { props.undoComplete(chore.id); }}>{chore.value}</li>
          ), this)
        }
      </ul>
    </div>
  );
}
