import React from 'react';
import { List, ListItem } from 'material-ui/List';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';

export default function CompletedChore(props) {
  const complete = props.chores.complete;
  if (complete.length) {
    return (
      <ul style={{ padding: 0, margin: 0 }}>
        <List>
          {complete.map(chore => (
            <li
              style={{ textDecoration: 'line-through', listStyle: 'none', padding: 0 }}
              key={`completeChore:${chore.chore_id}`}
              onClick={() => { props.undoComplete(chore.chore_id); }}
            >
              <ListItem
                rightIcon={<CheckBox style={{ fill: '#551a8b' }} />}
              >{chore.chore_name}</ListItem>
            </li>
          ), this)
          }
        </List>
      </ul>
    );
  }
  return null;
}
