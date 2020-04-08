import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = ({ bookingID , eventID }) => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to='tables/booking/new'>New booking</Link><br/>
    <Link to={`tables/booking/${bookingID}`}>Booking #1</Link><br/>
    <Link to='tables/events/new'>New event</Link><br/>
    <Link to={`tables/events/${eventID}`}>Event #1</Link><br/>
  </div>
);

Tables.propTypes = {
  bookingID: PropTypes.number,
  eventID: PropTypes.number,
};

Tables.defaultProps = {
  bookingID: 1,
  eventID: 1,
};

export default Tables;
