import React from 'react';
import styles from './SiteFooter.module.scss';

/**
 * @name SiteFooter is the name of the component
 *  @description The SiteFooter is a component that
 * displays the name of the company in white over the
 * same gradient used in the header.
 * @returns a footer for the site.
 */
const SiteFooter = () => (
  <div className={styles.container}>
    <footer className={styles.footer}>
      2021 Cool Heat Apparel Inc&nbsp;
      {'\u00A9'}
    </footer>
  </div>
);

export default SiteFooter;
