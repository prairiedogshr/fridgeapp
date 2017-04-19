import React from 'react';

import Header from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

export default function AdminChores(props) {
  return (
    <div>
      <Header>
        House Chores
      </Header>
      <Divider />
      <ol>
        {props.chores.houseChores.map(chore => (
          <li key={chore.chore_id}>{chore.chore_name}</li>
          ), this)
        }
      </ol>
    </div>
  );
}
