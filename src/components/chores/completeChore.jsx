import React from 'react';

import { List, ListItem } from 'material-ui/List';

export default function CompletedChore(props) {
  const complete = props.chores.complete;
  if (complete.length) {
    return (
      <ul>
        <List>
          {complete.map(chore => (
            <li
              style={{ textDecoration: 'line-through', listStyle: 'none' }}
              key={`completeChore:${chore.chore_id}`}
              onClick={() => { props.undoComplete(chore.chore_id); }}
            >
              <ListItem>{chore.chore_name}</ListItem>
            </li>
          ), this)
          }
        </List>
      </ul>
    );
  }
  return null;
}
