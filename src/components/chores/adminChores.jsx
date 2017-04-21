import React from 'react';
import Paper from 'material-ui/Paper';
import Header from 'material-ui/Subheader';
import Info from 'material-ui/svg-icons/action/info';
import { List, ListItem } from 'material-ui/List';
import Assignment from 'material-ui/svg-icons/action/assignment';

export default function AdminChores(props) {
  return (
    <Paper className="paper-wrapper">
      <Header className="header-title">
        <h2>All Chores</h2>
        <h3><Info style={{ fill: '#fff', width: 16, height: 16, verticalAlign: 'bottom' }} /> These are all the chores assigned in your house</h3>
      </Header>
      <List>
        <ol style={{ padding: 0, margin: 0 }}>
          {props.chores.houseChores.map(chore => (
            <li
              style={{ listStyle: 'none', padding: 0 }}
              key={chore.chore_id}
            >
              <ListItem
                className="mark-done"
                leftIcon={<Assignment />}
              >{chore.chore_name}</ListItem>
            </li>
            ), this)
          }
        </ol>
      </List>
    </Paper>
  );
}
