import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default function MonthlyFinances(props) {
  const topExpenses = props.expenses.sort((a, b) => b.expense_balance - a.expense_balance)
    .slice(0,5);
  topExpenses.forEach((exp) => {
    console.log(exp.expense_due)
  })
  return (
    <div>
      <List>
        <ListItem primaryText="Your Monthly Expenses" secondaryText={props.expenses.reduce((all, item) => {
          all += (item.expense_balance / props.roommates)
          return all;
        },0).toLocaleString()} />
        <Divider inset={false} />
        {topExpenses.map((exp) =>
          <p>{exp.expense_name} - ${(exp.expense_balance/props.roommates).toLocaleString()}</p>
        )}
      </List>
    </div>
    )
}