import React from 'react';
import PropTypes from 'prop-types';
import styles from './Events.module.scss';

const Events = ({ eventID }) => (
  <div className={styles.component}>
    <h2>Event view</h2>
    {eventID}
  </div>
);

Events.propTypes = {
  eventID: PropTypes.number,
};

Events.defaultProps = {
  eventID: 1,
};

export default Events;
