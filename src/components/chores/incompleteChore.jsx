import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Assignment from 'material-ui/svg-icons/action/assignment';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';

export default function IncompletedChore(props) {
  const incomplete = props.chores.incomplete;
  if (incomplete.length) {
    return (
      <List>
        <ol style={{ padding: 0, margin: 0 }}>
          {incomplete.map(chore => (
            <li
              style={{ listStyle: 'none', padding: 0 }}
              key={`incompleteChore:${chore.chore_id}`}
              onClick={() => { props.completeChore(chore.chore_id); }}
            >
              <ListItem
                className="mark-done"
                leftIcon={<Assignment />}
                rightIcon={<CheckCircle style={{ fill: '#551a8b', width: 16, height: 16, top: 4 }} />}
              >{chore.chore_name}</ListItem>
            </li>
          ), this)
          }
        </ol>
      </List>
    );
  }
  return null;
}
