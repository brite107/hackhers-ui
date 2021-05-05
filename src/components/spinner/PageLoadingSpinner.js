import React from 'react';
import styles from './PageLoadingSpinner.module.scss';

/**
 * @name LoadingSpinner
 * @description Holds the loading spinner and text
 * @returns Displays a loading spinner.
 *  */
const PageLoadingSpinner = () => (

  <div className={styles.spinner}>
    <div className={styles.loader} />
  </div>
);
export default PageLoadingSpinner;
