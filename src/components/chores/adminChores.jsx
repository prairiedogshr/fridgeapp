import React from 'react';

export default function AdminChores(props) {
  const incomplete = props.chores.incomplete;
  return (
    <div>
      <h1>
        Chores
      </h1>
      <ol>
        {incomplete.map(chore => (
          <li key={chore.id}>{chore.value}</li>
          ), this)
        }
      </ol>
    </div>
  );
}
