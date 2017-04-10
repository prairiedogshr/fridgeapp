import React from 'react';

export default function CompletedChore(props) {
  const complete = props.chores.complete;
  return (
    <ul>
      {complete.map(chore => (
        <li style={{ textDecoration: 'line-through', listStyle: 'none' }} key={chore.id} onClick={() => { props.undoComplete(chore.id); }}>{chore.value}</li>
        ), this)
      }
    </ul>
  );
}
