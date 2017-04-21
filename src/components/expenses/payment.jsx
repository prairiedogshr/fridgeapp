import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Header from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

export default function Payment(props) {
  return (
    <div>
      <Header>
        <h3>Make A Payment!</h3>
      </Header>
      <Divider />
      <br />
      <p>Click on expenses to add them to your payment</p>
      <p>Current Amount: ${parseFloat(props.total).toFixed(2)}</p>
    </div>
  );
}
