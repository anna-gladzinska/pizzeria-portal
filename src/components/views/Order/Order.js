import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Order = ({ orderID }) => (
  <div className={styles.component}>
    <h2>Order view</h2>
    {orderID}
  </div>
);

Order.propTypes = {
  orderID: PropTypes.number,
};

Order.defaultProps = {
  orderID: 1,
};

export default Order;
