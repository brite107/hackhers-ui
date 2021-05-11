import React from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingBagLine } from 'react-icons/ri';
import { Col, Container, Row } from 'react-bootstrap';
import { BsGearFill } from 'react-icons/bs';
import Logo from '../logo/Logo';
import styles from './SiteHeader.module.scss';
import { getCustomer } from '../../utils/common';
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
  isLoggedIn, handleLogout, dropdown
}) => (
  <div className={styles.container}>
    <div className={styles.signIn}>
      {isLoggedIn ? (
        <>
          <div className={styles.email}>
            <Link to={`/customers/edit/${getCustomer().id}`} className="mx-3">
              {getCustomer().email}
            </Link>
            <Link to={`/customers/edit/${getCustomer().id}`}>
              <BsGearFill />
            </Link>
            <span className="mx-4">|</span>
            <Link to="/" onClick={handleLogout}>
              SIGN OUT
            </Link>
          </div>
        </>
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
        <Row className="my-auto">
          <Col xs={1} sm={2} md={3} lg={1} xl={2} className="my-auto">
            <Link to="/">
              <Logo />
            </Link>
          </Col>
          <Col xs={8} sm={7} md={7} lg={9} xl={8} className="my-auto">
            <div>
              {dropdown}
            </div>
          </Col>
          <Col xs={1} sm={1} md={1} lg={1} xl={2} className="my-auto">
            <div className={styles.icon}>
              <Link to="/shoppingCart">
                <RiShoppingBagLine />
              </Link>
            </div>
          </Col>
          <Col xs={1} sm={1} md={1} lg={1} className="my-auto">
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
