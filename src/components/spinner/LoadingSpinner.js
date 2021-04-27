import React from 'react';
import styles from './LoadingSpinner.module.scss';

/**
 * @name LoadingSpinner
 * @description Holds the loading spinner and text
 * @returns Displays a loading spinner and a heading with the word Loading.
 *  */ 
const LoadingSpinner = () => {
    return (
        <div>
            <div className={styles.loader}></div>
            <h1 className={styles.loading}>Loading ...</h1>
        </div>
    )
}
export default LoadingSpinner