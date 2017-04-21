import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Header from 'material-ui/Subheader';
import Label from 'material-ui/svg-icons/action/Label';

export default function MonthlyFinances(props) {
  const topExpenses = props.expenses.sort((a, b) => b.expense_balance - a.expense_balance)
    .slice(0, 5);
  topExpenses.forEach((exp) => {
    console.log(exp.expense_due);
  });
  return (
    <div>
      <Header>
        <h3>This Month's Total - {'$' + parseFloat(props.expenses.reduce((all, item) => {
          all += (item.expense_balance / props.roommates)
          return all;
        }, 0)).toFixed(2)}</h3>
      </Header>
      <Divider />
      <List>
        {topExpenses.map((exp, index) =>
          <ListItem
            leftIcon={<Label />}
            primaryText={exp.expense_name + ' - $' + parseFloat((exp.expense_balance / props.roommates)).toFixed(2)}
            key={`monthlyFinances${index}`}
          />
        )}
      </List>
    </div>
  );
}
