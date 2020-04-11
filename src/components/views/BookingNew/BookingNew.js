import React from 'react';
import styles from './BookingNew.module.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';

const BookingNew= () => (
  <Paper className={styles.component}>
    <Typography variant="h6">
      New booking
    </Typography>
    <form>
      <TextField className={styles.textfield} id="standard-basic" label="Table" type="number" required/>
      <TextField className={styles.textfield}
        id="date"
        label="Date"
        type="date"
        defaultValue="2020-04-11"
        InputLabelProps={{shrink: true}}
        required
      />
      <TextField className={styles.textfield}
        id="time"
        label="Time"
        type="time"
        defaultValue="12:00"
        InputLabelProps={{shrink: true}}
        inputProps={{step: 1800 }}
        required
      />
      <TextField className={styles.textfield} id="standard-basic" label="Hours" type="number" required/>
      <TextField className={styles.textfield} id="standard-basic" label="People" type="number" required/>
      <TextField className={styles.textfield} id="standard-basic" label="Phone" required/>
      <TextField className={styles.textfield} id="standard-basic" label="Address" required/>
      <Button type="submit">Submit</Button>
    </form>
  </Paper>
);

export default BookingNew;
