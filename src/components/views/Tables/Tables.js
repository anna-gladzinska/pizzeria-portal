import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';

const demoTables = [
  {time: '12:00', statusOne:'event', statusTwo:'free', statusThree:'free', idOne:1, idTwo: null, idThree: null},
  {time: '12:30', statusOne:'event', statusTwo:'free', statusThree:'free', idOne:1, idTwo: null, idThree: null},
  {time: '13:00', statusOne:'event', statusTwo:'free', statusThree:'free', idOne:1, idTwo: null, idThree: null},
  {time: '13:30', statusOne:'event', statusTwo:'free', statusThree:'free', idOne:1, idTwo: null, idThree: null},
  {time: '14:00', statusOne:'event', statusTwo:'free', statusThree:'free', idOne:1, idTwo: null, idThree: null},
  {time: '14:30', statusOne:'booked', statusTwo:'free', statusThree:'free', idOne:2, idTwo: null, idThree: null},
  {time: '15:00', statusOne:'booked', statusTwo:'booked', statusThree:'free', idOne:2, idTwo: 3, idThree: null},
  {time: '15:30', statusOne:'booked', statusTwo:'booked', statusThree:'free', idOne:2, idTwo: 3, idThree: null},
  {time: '16:00', statusOne:'booked', statusTwo:'booked', statusThree:'free', idOne:2, idTwo: 3, idThree: null},
  {time: '16:30', statusOne:'free', statusTwo:'booked', statusThree:'free', idOne:null, idTwo: 3, idThree: null},
  {time: '17:00', statusOne:'free', statusTwo:'booked', statusThree:'free', idOne:null, idTwo: 3, idThree: null},
  {time: '17:30', statusOne:'free', statusTwo:'free', statusThree:'free', idOne:null, idTwo: null, idThree: null},
  {time: '18:00', statusOne:'free', statusTwo:'free', statusThree:'booked', idOne:null, idTwo: null, idThree: 4},
  {time: '18:30', statusOne:'free', statusTwo:'free', statusThree:'booked', idOne:null, idTwo: null, idThree: 4},
  {time: '19:00', statusOne:'free', statusTwo:'free', statusThree:'booked', idOne:null, idTwo: null, idThree: 4},
  {time: '19:30', statusOne:'free', statusTwo:'free', statusThree:'booked', idOne:null, idTwo: null, idThree: 4},
  {time: '20:00', statusOne:'free', statusTwo:'free', statusThree:'booked', idOne:null, idTwo: null, idThree: 4},
  {time: '20:30', statusOne:'free', statusTwo:'free', statusThree:'booked', idOne:null, idTwo: null, idThree: 4},
  {time: '21:00', statusOne:'free', statusTwo:'free', statusThree:'booked', idOne:null, idTwo: null, idThree: 4},
  {time: '21:30', statusOne:'free', statusTwo:'free', statusThree:'free', idOne:null, idTwo: null, idThree: null},
  {time: '22:00', statusOne:'free', statusTwo:'free', statusThree:'free', idOne:null, idTwo: null, idThree: null},
  {time: '22:30', statusOne:'free', statusTwo:'free', statusThree:'free', idOne:null, idTwo: null, idThree: null},
  {time: '23:00', statusOne:'free', statusTwo:'free', statusThree:'free', idOne:null, idTwo: null, idThree: null},
  {time: '23:30', statusOne:'free', statusTwo:'free', statusThree:'free', idOne:null, idTwo: null, idThree: null},
  {time: '24:00', statusOne:'free', statusTwo:'free', statusThree:'free', idOne:null, idTwo: null, idThree: null},
];

const renderActions = status => {

  switch (status) {
    case 'free':
      return (
        <>
          <Button className={styles.new} component={Link} to='tables/booking/new'>New booking</Button>
          <Button className={styles.new} component={Link} to='tables/events/new'>New event</Button>
        </>
      );
    case 'booked':
      return (
        <Button className={styles.booked} disabled>Booked</Button>
      );
    case 'event':
      return (
        <Button className={styles.event} disabled>Event</Button>
      );
    default:
      return null;
  }
};

const Tables = () => (
  <Paper className={styles.component}>
    <Typography variant="h6">
      Tables
    </Typography>
    <div className={styles.wrapper}>
      <form>
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue="2020-04-11"
          InputLabelProps={{shrink: true}}
        />
        <TextField
          id="time"
          label="Time"
          type="time"
          defaultValue="12:00"
          InputLabelProps={{shrink: true}}
          inputProps={{step: 1800 }}
        />
      </form>
    </div>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoTables.map(row => (
          <TableRow key={row.time}>
            <TableCell component="th" scope="row">
              {row.time}{renderActions(row.statusOne)}
              {row.idOne && (
                <Button className={styles.details} component={Link} to={row.statusOne === 'booked' ? `tables/booking/${row.idOne}` : `tables/events/${row.idOne}`}>
                  Details #{row.idOne}
                </Button>
              )}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.time}{renderActions(row.statusTwo)}
              {row.idTwo && (
                <Button className={styles.details} component={Link} to={row.statusTwo === 'booked' ? `tables/booking/${row.idTwo}` : `tables/events/${row.idTwo}`}>
                  Details #{row.idTwo}
                </Button>
              )}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.time}{renderActions(row.statusThree)}
              {row.idThree && (
                <Button className={styles.details} component={Link} to={row.statusThree === 'booked' ? `tables/booking/${row.idThree}` : `tables/events/${row.idThree}`}>
                  Details #{row.idThree}
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;
