import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default function MonthlyFinances(props) {
  console.log('props? ', props)
  const topExpenses = props.expenses.sort((a, b) => b.expense_balance - a.expense_balance)
    .slice(0,5);
  topExpenses.forEach((exp) => {
    console.log(exp.expense_due)
  })
  return (
    <div>
      <h3>This Month's Total - {'$' + parseFloat(props.expenses.reduce((all, item) => {
          all += (item.expense_balance / props.roommates)
          return all;
        },0)).toFixed(2)}</h3>
      <List>
        <Divider inset={false} />
        {topExpenses.map((exp) =>
          <ListItem primaryText={exp.expense_name + ' - $' + parseFloat((exp.expense_balance/props.roommates)).toFixed(2)} />
        )}
      </List>
    </div>
    )
}