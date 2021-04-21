import React from 'react';
import logo from './cool-heat-logo.svg';
import styles from './Logo.module.scss';

/**
 * @name logo
 * @returns styles logo display
 */
const Logo = () => (
  <div className={styles.logo}>
    <img src={logo} alt="Cool Heat logo" />
  </div>
);

export default Logo;
