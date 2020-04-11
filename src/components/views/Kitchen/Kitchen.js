import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button  from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const demoOrderOne = [
  {table: '1', product: 'ZIO STEFANOS DOUGHNUT', amount:'1', options:null},
  {table: '1', product: 'NONNA ALBAS PIZZA', amount:'1', options: ['red peppers', ' salami']},
];

const demoOrderTwo = [
  {table: 'Broadway 34', product: 'NONNA ALBAS PIZZA', amount:'4', options: ['corn', ' green peppers', ' fresh basil', ' bacon']},
];

const Kitchen = () => (
  <Paper className={styles.component}>
    <Typography variant="h6">Order #1</Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table / Address</TableCell>
          <TableCell>Product</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Options</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoOrderOne.map(row => (
          <TableRow key={row.table}>
            <TableCell component="th" scope="row">
              {row.table}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.product}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.amount}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.options}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <div className={styles.wrapper}>
      <Button className={styles.done}>DONE</Button>
    </div>
    <hr/>
    <Typography variant="h6">Order #2</Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table / Address</TableCell>
          <TableCell>Product</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Options</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoOrderTwo.map(row => (
          <TableRow key={row.table}>
            <TableCell component="th" scope="row">
              {row.table}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.product}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.amount}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.options}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <div className={styles.wrapper}>
      <Button className={styles.done}>DONE</Button>
    </div>
  </Paper>
);

export default Kitchen;
