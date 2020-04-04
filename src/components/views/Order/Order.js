import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Order = ({ id }) => (
  <div className={styles.component}>
    <h2>Order view</h2>
    {id}
  </div>
);

Order.propTypes = {
  id: PropTypes.number,
};

export default Order;
