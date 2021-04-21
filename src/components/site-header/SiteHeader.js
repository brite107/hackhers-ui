import React from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingBagLine } from 'react-icons/ri';
import Logo from '../logo/Logo';
import styles from './SiteHeader.module.scss';

/**
 * @name SiteHeader
 * @description The SiteHeader is a functional component that
 * displays navigation links. This component contains
 * a ternary to change the Sign In link to a Logout link and back depending on whether the user
 * is logged in.
 * @param {isLoggedIn} isLoggedIn is the state of the user.
 * @param {email} email this is the state of the email address of the logged in user.
 * @param {handleLogout} handleLogout is a simple logout function located in App.js.
 * @returns a header that contains navigation links.
 */
const SiteHeader = ({
  email, isLoggedIn, handleLogout
}) => (
  <div className={styles.container}>
    <div className={styles.signIn}>
      {isLoggedIn ? (
        <div className={styles.email}>
          {email}
          <Link to="/" onClick={handleLogout} className={styles.email}>
            Logout
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login"> Sign In </Link>
        </div>
      )}
    </div>
    <nav className={styles.nav}>
      <Link to="/">
        <Logo />
      </Link>
      <div className={styles.navLinks}>
        <Link to="/men"> MEN </Link>
        <Link to="/women"> WOMEN </Link>
        <Link to="/kids"> KIDS </Link>
      </div>
      <div className={styles.icon}>
        <Link to="/shoppingCart">
          <RiShoppingBagLine />
        </Link>
      </div>
    </nav>
  </div>
);

export default SiteHeader;
