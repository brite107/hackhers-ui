import React from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingBagLine } from 'react-icons/ri';
import { Col, Row } from 'react-bootstrap';
import Logo from '../logo/Logo';
import styles from './SiteHeader.module.scss';
import { getCustomer } from '../../utils/common';
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
  isLoggedIn, handleLogout, dropdown
}) => (
  <div className={styles.container}>
    <div className={styles.signIn}>
      {isLoggedIn ? (
        <div className={styles.email}>
          {getCustomer().email}
          <Link to="/" onClick={handleLogout}>
            LOGOUT
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login"> SIGN IN </Link>
        </div>
      )}
    </div>
    <nav className={styles.nav}>
      <Row className="my-auto">
        <Col lg="2">
          <Link to="/">
            <Logo />
          </Link>
        </Col>
        <Col lg="8" className="my-auto">
          <div className={styles.navLinks}>
            {dropdown}
          </div>
        </Col>
        <Col lg="2">
          <div className={styles.icon}>
            <Link to="/shoppingCart">
              <RiShoppingBagLine />
            </Link>
          </div>
        </Col>
      </Row>
    </nav>
  </div>
);
export default SiteHeader;
