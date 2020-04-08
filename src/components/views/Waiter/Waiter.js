import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = ({ orderID }) => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link to='waiter/order/new'>New order</Link><br/>
    <Link to={`waiter/order/${orderID}`}>Order #1</Link><br/>
  </div>
);

Waiter.propTypes = {
  orderID: PropTypes.number,
};

Waiter.defaultProps = {
  orderID: 1,
};

export default Waiter;
