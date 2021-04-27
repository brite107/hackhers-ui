import React from 'react';
import styles from './ShoppingCart.module.scss';

/**
 * @name ShoppingCart
 * @description At this time, this page simply displays an h1 and an h2
 * with text stating that there is nothing in the cart
 * @returns an h1 and an h2
 */
const ShoppingCart = () => (
  <div className={styles.container}>
    <h1 className={styles.nothing}>Nothing to see here.</h1>
    <h2 className={styles.add}>Add products to your cart to get started!</h2>
  </div>
);

export default ShoppingCart;
