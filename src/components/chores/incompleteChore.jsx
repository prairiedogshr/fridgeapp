import React from 'react';

export default function IncompletedChore(props) {
  const incomplete = props.chores.incomplete;
  return (
    <ol>
      {incomplete.map(chore => (
        <li key={`incompleteChore:${chore.chore_id}`} onClick={() => { props.completeChore(chore.chore_id); }}>{chore.chore_name}</li>
        ), this)
      }
    </ol>
  );
}
