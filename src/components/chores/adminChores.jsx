import React from 'react';

export default function AdminChores(props) {
  return (
    <div>
      <h2>
        House Chores
      </h2>
      <ol>
        {props.chores.houseChores.map(chore => (
          <li key={chore.chore_id}>{chore.chore_name}</li>
          ), this)
        }
      </ol>
    </div>
  );
}
