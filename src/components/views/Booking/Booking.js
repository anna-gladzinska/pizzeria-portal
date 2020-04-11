import React from 'react';
import PropTypes from 'prop-types';
import styles from './Booking.module.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';

const Booking = ({ bookingID }) => (
  <Paper className={styles.component}>
    <Typography variant="h6">
      Booking #{bookingID}
    </Typography>
    <form>
      <TextField className={styles.textfield} id="standard-basic" label="Table" type="number" value="1"/>
      <TextField className={styles.textfield}
        id="date"
        label="Date"
        type="date"
        value="2020-04-11"
        InputLabelProps={{shrink: true}}
      />
      <TextField className={styles.textfield}
        id="time"
        label="Time"
        type="time"
        value="14:00"
        InputLabelProps={{shrink: true}}
        inputProps={{step: 1800 }}
      />
      <TextField className={styles.textfield} id="standard-basic" label="Hours" type="number" value="2"/>
      <TextField className={styles.textfield} id="standard-basic" label="People" type="number" value="2"/>
      <TextField className={styles.textfield} id="standard-basic" label="Phone" value="666-666-666"/>
      <TextField className={styles.textfield} id="standard-basic" label="Address" value="New York"/>
      <Button type="submit">Save</Button>
    </form>
  </Paper>
);

Booking.propTypes = {
  bookingID: PropTypes.number,
};

Booking.defaultProps = {
  bookingID: 1,
};

export default Booking;

