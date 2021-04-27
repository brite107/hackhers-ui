import React from 'react';
import styles from './Men.module.scss';
import Cards from '../card/Card';

const Men = () => (
  <div className={styles.container}>
    <h1 className={styles.demographics}>Men</h1>
    <Cards
      title="MEN&apos;S SHOE"
    />
  </div>
);

export default Men;
