import React from 'react';
import styles from './Dashboard.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const demoStatistics = [
  {name: 'Local', number: 8},
  {name: 'Remote', number: 2},
];

const demoReservations = [
  {table: '1', people:'2', time: '14:00 - 16:00'},
  {table: '2', people:'3', time: '15:00 - 17:00'},
  {table: '3', people:'5', time: '18:00 - 21:00'},
];

const demoEvents = [
  {table: '1', name:'Easter Egg', time: '12:00 - 14:00'},
];

const Dashboard = () => (
  <div>
    <Paper className={styles.component}>
      <Typography variant="h6">
      Today&apos;s orders
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order type</TableCell>
            <TableCell>Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoStatistics.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>
                {row.number}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Paper className={styles.component}>
      <Typography variant="h6">
      Today&apos;s reservations
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>People</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoReservations.map(row => (
            <TableRow key={row.table}>
              <TableCell component="th" scope="row">
                {row.table}
              </TableCell>
              <TableCell>
                {row.people}
              </TableCell>
              <TableCell>
                {row.time}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Paper className={styles.component}>
      <Typography variant="h6">
      Today&apos;s events
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoEvents.map(row => (
            <TableRow key={row.table}>
              <TableCell component="th" scope="row">
                {row.table}
              </TableCell>
              <TableCell>
                {row.name}
              </TableCell>
              <TableCell>
                {row.time}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Dashboard;
