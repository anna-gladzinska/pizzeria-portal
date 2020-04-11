import React from 'react';
import PropTypes from 'prop-types';
import styles from './Events.module.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';

const Events = ( { eventID }) => (
  <Paper className={styles.component}>
    <Typography variant="h6">
      Event #{eventID}
    </Typography>
    <form>
      <TextField className={styles.textfield} id="standard-basic" label="Name" value="Easter Egg"/>
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
        value="12:00"
        InputLabelProps={{shrink: true}}
        inputProps={{step: 1800 }}
      />
      <TextField className={styles.textfield} id="standard-basic" label="Hours" type="number" value="4"/>
      <Button type="submit">Save</Button>
    </form>
  </Paper>
);

Events.propTypes = {
  eventID: PropTypes.number,
};

Events.defaultProps = {
  eventID: 1,
};

export default Events;

// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './Events.module.scss';

// const Events = ({ eventID }) => (
//   <div className={styles.component}>
//     <h2>Event view</h2>
//     {eventID}
//   </div>
// );

// Events.propTypes = {
//   eventID: PropTypes.number,
// };

// Events.defaultProps = {
//   eventID: 1,
// };

// export default Events;
