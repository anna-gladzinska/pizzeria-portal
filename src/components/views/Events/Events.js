import React from 'react';
import PropTypes from 'prop-types';
import styles from './Events.module.scss';

const Events = ({ id }) => (
  <div className={styles.component}>
    <h2>Event view</h2>
    {id}
  </div>
);

Events.propTypes = {
  id: PropTypes.number,
};

export default Events;
