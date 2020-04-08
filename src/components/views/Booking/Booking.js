import React from 'react';
import PropTypes from 'prop-types';
import styles from './Booking.module.scss';

const Booking = ({ bookingID }) => (
  <div className={styles.component}>
    <h2>Booking view</h2>
    {bookingID}
  </div>
);

Booking.propTypes = {
  bookingID: PropTypes.number,
};

Booking.defaultProps = {
  bookingID: 1,
};

export default Booking;
