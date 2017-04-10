import React from 'react';

export default function AdminChores(props) {
  const complete = props.chores.complete;
  const incomplete = props.chores.incomplete;
  return (
    <div>
      <h1>
        Chores
      </h1>
      <ol>
        {complete.map(chore => (
          <li key={chore.id}>{chore.value}</li>
          ), this)
        }
        {incomplete.map(chore => (
          <li key={chore.id}>{chore.value}</li>
          ), this)
        }
      </ol>
    </div>
  );
}
