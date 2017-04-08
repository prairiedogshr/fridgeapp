import React from 'react';

export default function IncompletedChore(props) {
  const incomplete = props.chores.incomplete;
  return (
    <ol>
      {incomplete.map(chore => (
        <li key={chore.id} onClick={() => { props.completeChore(chore.id); }}>{chore.value}</li>
        ), this)
      }
    </ol>
  );
}
