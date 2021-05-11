import React from 'react';
import SocialButtonsContainer from 'react-social-media-buttons';
import styles from './SiteFooter.module.scss';

/**
 * @name SiteFooter is the name of the component
 *  @description The SiteFooter is a component that
 * displays the name of the company, and includes links to social media outlets.
 * @returns a footer for the site.
 */
const SiteFooter = () => (
  <footer className={styles.container}>
    <div className={styles.icons}>
      <SocialButtonsContainer
        links={['https://www.facebook.com/facebook', 'https://www.instagram.com/instagram/', 'https://twitter.com/Twitter', 'https://www.youtube.com/']}
        buttonStyle={{
          width: '45px', height: '45px', margin: '0px 12px', backgroundColor: 'transparent', borderRadius: '50%', border: '2px solid #ffffff'
        }}
        iconStyle={{ color: 'white' }}
        openNewTab
      />
    </div>
    <div className={styles.text}>
      {' '}
      {'\u00A9'}
      {' '}
      2021 Cool Heat Apparel Inc &nbsp;
    </div>
  </footer>
);

export default SiteFooter;
