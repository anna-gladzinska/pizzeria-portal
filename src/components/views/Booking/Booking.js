import React from 'react';
import PropTypes from 'prop-types';
import styles from './Booking.module.scss';

const Booking = ({ id }) => (
  <div className={styles.component}>
    <h2>Booking view</h2>
    {id}
  </div>
);

Booking.propTypes = {
  id: PropTypes.number,
};

export default Booking;
