import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default function MonthlyFinances(props) {
  return (
    <div>
    <List>
      <ListItem primaryText="Monthly Total" secondaryText={props.expenses.reduce((all, item) => {
        all += item.expense_balance
        return all;
      },0)} />
    </List>
    <Divider inset={false} />
    </div>
    )
}