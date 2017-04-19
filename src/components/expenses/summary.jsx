import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default function Summary(props) {
  return (
    <Table
    multiSelectable={true}
    enableSelectAll={true}
    onRowSelection={props.handleOnToggle}>
    >
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Expense</TableHeaderColumn>
          <TableHeaderColumn>Total</TableHeaderColumn>
          <TableHeaderColumn>Paid?</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.expenses.map((expense) => 
          <TableRow>
            <TableRowColumn>{expense.expense_name}</TableRowColumn>
            <TableRowColumn>{expense.expense_balance/props.roommates}</TableRowColumn>
            <TableRowColumn>{expense.is_paid === 1 ? 'true' : 'false'}</TableRowColumn>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}