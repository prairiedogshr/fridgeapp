import React from 'react';

export default function AdminChores(props) {
  return (
    <div>
      <h1>
        Chores
      </h1>
      <ol>
        {props.chores.houseChores.map(chore => (
          <li key={chore.chore_id}>{chore.chore_name}</li>
          ), this)
        }
      </ol>
    </div>
  );
}
