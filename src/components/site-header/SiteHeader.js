import React from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingBagLine } from 'react-icons/ri';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../logo/Logo';
import styles from './SiteHeader.module.scss';
import BurgerMenu from '../burgerMenu/BurgerMenu';
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
  email, isLoggedIn, handleLogout, dropdown
}) => (
  <div className={styles.container}>
    <div className={styles.signIn}>
      {isLoggedIn ? (
        <div className={styles.email}>
          {email}
          <Link to="/" onClick={handleLogout}>
            SIGN OUT
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            SIGN IN
          </Link>
        </div>
      )}
    </div>
    <nav className={styles.nav}>
      <Container fluid>
        <Row>
          <Col sm={6} md={2} lg={2}>
            <Link to="/">
              <Logo />
            </Link>
          </Col>
          <Col sm={6} md={7} lg={8} className="my-auto">
            <div>
              {dropdown}
            </div>
          </Col>
          <Col sm={6} md={true} lg={2}>
            <div className={styles.icon}>
              <Link to="/shoppingCart">
                <RiShoppingBagLine />
              </Link>
            </div>
          </Col>
          <Col sm={6} md={true} lg={2}>
            <div className={styles.menu}>
              <BurgerMenu />
            </div>
          </Col>
        </Row>
      </Container>
    </nav>

  </div>
);
export default SiteHeader;
