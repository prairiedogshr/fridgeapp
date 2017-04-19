import React from 'react';

import { ListItem } from 'material-ui/List';

export default function IncompletedChore(props) {
  const incomplete = props.chores.incomplete;
  if (incomplete.length) {
    return (
      <ol>
        {incomplete.map(chore => (
          <li key={`incompleteChore:${chore.chore_id}`} onClick={() => { props.completeChore(chore.chore_id); }}><ListItem>{chore.chore_name}</ListItem></li>
          ), this)
        }
      </ol>
    );
  }
  return null;
}
