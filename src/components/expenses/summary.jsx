import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

export default function Summary(props) {
  return (
    <Table
      multiSelectable={true}
      enableSelectAll={true}
      onRowSelection={props.handleOnToggle}
    >
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Expense</TableHeaderColumn>
          <TableHeaderColumn>Total</TableHeaderColumn>
          <TableHeaderColumn>Paid?</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.expenses.map((expense, index) =>
          <TableRow key={`summaryItem${index}`}>
            <TableRowColumn>{expense.expense_name}</TableRowColumn>
            <TableRowColumn>${parseFloat(expense.expense_balance / props.roommates).toFixed(2)}</TableRowColumn>
            <TableRowColumn>{expense.expense_is_paid === 1 ? 'Yes' : 'No'}</TableRowColumn>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
