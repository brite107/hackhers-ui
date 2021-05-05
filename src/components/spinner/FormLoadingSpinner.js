import React from 'react';
import styles from './FormLoadingSpinner.module.scss';

/**
 * @name FormLoadingSpinner
 * @description Holds the loading spinner and text form the loading spinner on forms
 * @returns Displays a loading spinner
 *  */
const FormLoadingSpinner = () => (
  <div className={styles.spinner}>
    <div className={styles.loader} />
  </div>
);
export default FormLoadingSpinner;
