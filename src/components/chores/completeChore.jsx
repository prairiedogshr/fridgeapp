import React from 'react';

export default function CompletedChore(props) {
  const complete = props.chores.complete;
  if (complete.length) {
    return (
      <ul>
        {complete.map(chore => (
          <li style={{ textDecoration: 'line-through', listStyle: 'none' }} key={`completeChore:${chore.chore_id}`} onClick={() => { props.undoComplete(chore.chore_id); }}>{chore.chore_name}</li>
          ), this)
        }
      </ul>
    )
  }
  return null;
}
