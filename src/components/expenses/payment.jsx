import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default function Payment(props) {
  return (
    <div>
      <h3>Make A Payment!</h3>
      <p>Click on expenses to add them to your payment</p>
    <Divider inset={false} />
      <p>Current Amount: ${props.total}</p>
    </div>
    )
}