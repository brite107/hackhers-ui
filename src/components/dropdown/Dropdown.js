import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import styles from './Dropdown.module.scss';
/**
 * Creates a dropdown menu on hover to category or type
 * @returns dropdown menue based on demographic
 */
export default function App() {
  /**
     * Handles hover functionality for each demographic
     */
  const [isHover, toggleHover] = React.useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  const [isMouse, toggleMouse] = React.useState(false);
  const toggleMouseMenu = () => {
    toggleMouse(!isMouse);
  };
  const [isOver, toggleOver] = React.useState(false);
  const toggleOverMenu = () => {
    toggleOver(!isOver);
  };
  /**
   * Handles dropdown animation
   */
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0
      },
      display: 'block'
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0,
        delay: 0.01
      },
      transitionEnd: {
        display: 'none'
      }
    }
  };
  return (
    <div className={styles.drop}>
      <div className={styles.container}>
        <div className={styles.flexitem}>
          <motion.div
            className={styles.menuitem}
            onHoverStart={toggleHoverMenu}
            onHoverEnd={toggleHoverMenu}
          >
            <Link className={styles.mainLinks} to="/products/Men">MEN</Link>
            <motion.div
              className={styles.submenu}
              initial="exit"
              animate={isHover ? 'enter' : 'exit'}
              variants={subMenuAnimate}
            >

              <Row className={styles.submenubackground}>
                <Col class="lg-6" className={styles.submenucontainer1}>
                  <h3 className={styles.cat}>CATEGORIES</h3>
                  <Link to="/products/Men/category/Baseball" className={styles.submenuitem}>Baseball</Link>
                  <Link to="/products/Men/category/Basketball" className={styles.submenuitem}>Basketball</Link>
                  <Link to="/products/Men/category/Boxing" className={styles.submenuitem}>Boxing</Link>
                  <Link to="/products/Men/category/Football" className={styles.submenuitem}>Football</Link>
                  <Link to="/products/Men/category/Golf" className={styles.submenuitem}>Golf</Link>
                  <Link to="/products/Men/category/Hockey" className={styles.submenuitem}>Hockey</Link>
                  <Link to="/products/Men/category/Running" className={styles.submenuitem}>Running</Link>
                  <Link to="/products/Men/category/Skateboarding" className={styles.submenuitem}>Skateboarding</Link>
                  <Link to="/products/Men/category/Soccer" className={styles.submenuitem}>Soccer</Link>
                  <Link to="/products/Men/category/Weightlifting" className={styles.submenuitem}>Weightlifting</Link>
                </Col>
                <Col class="lg-6" className={styles.submenucontainer2}>
                  <h3 className={styles.type}>TYPES</h3>
                  <Link to="/products/Men/type/Belt" className={styles.submenuitem}>Belt</Link>
                  <Link to="/products/Men/type/Elbow+Pad" className={styles.submenuitem}>Elbow Pad</Link>
                  <Link to="/products/Men/type/Flip+Flop" className={styles.submenuitem}>Flip Flop</Link>
                  <Link to="/products/Men/type/Glove" className={styles.submenuitem}>Glove</Link>
                  <Link to="/products/Men/type/Hat" className={styles.submenuitem}>Hat</Link>
                  <Link to="/products/Men/type/Headband" className={styles.submenuitem}>Headband</Link>
                  <Link to="/products/Men/type/Helmet" className={styles.submenuitem}>Helmet</Link>
                  <Link to="/products/Men/type/Hoodie" className={styles.submenuitem}>Hoodie</Link>
                  <Link to="/products/Men/type/Jacket" className={styles.submenuitem}>Jacket</Link>
                  <Link to="/products/Men/type/Pant" className={styles.submenuitem}>Pant</Link>
                  <Link to="/products/Men/type/Pool+Noodle" className={styles.submenuitem}>Pool Noodle</Link>
                  <Link to="/products/Men/type/Shin+Guard" className={styles.submenuitem}>Shin Guard</Link>
                  <Link to="/products/Men/type/Shoe" className={styles.submenuitem}>Shoe</Link>
                  <Link to="/products/Men/type/Short" className={styles.submenuitem}>Short</Link>
                  <Link to="/products/Men/type/Sock" className={styles.submenuitem}>Sock</Link>
                  <Link to="/products/Men/type/Sunglasses" className={styles.submenuitem}>Sunglasses</Link>
                  <Link to="/products/Men/type/Tank+Top" className={styles.submenuitem}>Tank Top</Link>
                  <Link to="/products/Men/type/Visor" className={styles.submenuitem}>Visor</Link>
                  <Link to="/products/Men/type/Wristband" className={styles.submenuitem}>Wristband</Link>
                </Col>
              </Row>

            </motion.div>
          </motion.div>
        </div>
        <div className={styles.flexitem}>
          <motion.div
            className={styles.menuitem}
            onMouseEnter={toggleMouseMenu}
            onMouseLeave={toggleMouseMenu}
          >
            <Link className={styles.mainLinks} to="/products/Women">WOMEN</Link>
            <motion.div
              className={styles.submenu}
              initial="exit"
              animate={isMouse ? 'enter' : 'exit'}
              variants={subMenuAnimate}
            >
              <Row className={styles.submenubackground}>
                <Col className={styles.submenucontainer1}>
                  <h3 className={styles.cat}>CATEGORIES</h3>
                  <Link to="/products/Women/category/Baseball" className={styles.submenuitem}>Baseball</Link>
                  <Link to="/products/Women/category/Basketball" className={styles.submenuitem}>Basketball</Link>
                  <Link to="/products/Women/category/Boxing" className={styles.submenuitem}>Boxing</Link>
                  <Link to="/products/Women/category/Football" className={styles.submenuitem}>Football</Link>
                  <Link to="/products/Women/category/Golf" className={styles.submenuitem}>Golf</Link>
                  <Link to="/products/Women/category/Hockey" className={styles.submenuitem}>Hockey</Link>
                  <Link to="/products/Women/category/Running" className={styles.submenuitem}>Running</Link>
                  <Link to="/products/Women/category/Skateboarding" className={styles.submenuitem}>Skateboarding</Link>
                  <Link to="/products/Women/category/Soccer" className={styles.submenuitem}>Soccer</Link>
                  <Link to="/products/Women/category/Weightlifting" className={styles.submenuitem}>Weightlifting</Link>
                </Col>
                <Col className={styles.submenucontainer2}>
                  <h3 className={styles.type}>TYPES</h3>
                  <Link to="/products/Women/type/Belt" className={styles.submenuitem}>Belt</Link>
                  <Link to="/products/Women/type/Elbow+Pad" className={styles.submenuitem}>Elbow Pad</Link>
                  <Link to="/products/Women/type/Flip+Flop" className={styles.submenuitem}>Flip Flop</Link>
                  <Link to="/products/Women/type/Glove" className={styles.submenuitem}>Glove</Link>
                  <Link to="/products/Women/type/Hat" className={styles.submenuitem}>Hat</Link>
                  <Link to="/products/Women/type/Headband" className={styles.submenuitem}>Headband</Link>
                  <Link to="/products/Women/type/Helmet" className={styles.submenuitem}>Helmet</Link>
                  <Link to="/products/Women/type/Hoodie" className={styles.submenuitem}>Hoodie</Link>
                  <Link to="/products/Women/type/Jacket" className={styles.submenuitem}>Jacket</Link>
                  <Link to="/products/Women/type/Pant" className={styles.submenuitem}>Pant</Link>
                  <Link to="/products/Women/type/Pool+Noodle" className={styles.submenuitem}>Pool Noodle</Link>
                  <Link to="/products/Women/type/Shin+Guard" className={styles.submenuitem}>Shin Guard</Link>
                  <Link to="/products/Women/type/Shoe" className={styles.submenuitem}>Shoe</Link>
                  <Link to="/products/Women/type/Short" className={styles.submenuitem}>Short</Link>
                  <Link to="/products/Women/type/Sock" className={styles.submenuitem}>Sock</Link>
                  <Link to="/products/Women/type/Sunglasses" className={styles.submenuitem}>Sunglasses</Link>
                  <Link to="/products/Women/type/Tank+Top" className={styles.submenuitem}>Tank Top</Link>
                  <Link to="/products/Women/type/Visor" className={styles.submenuitem}>Visor</Link>
                  <Link to="/products/Women/type/Wristband" className={styles.submenuitem}>Wristband</Link>
                </Col>
              </Row>
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.flexitem}>
          <motion.div
            className={styles.menuitem}
            onMouseOver={toggleOverMenu}
            onMouseOut={toggleOverMenu}
          >
            <Link className={styles.mainLinks} to="/products/Kids">KIDS</Link>
            <motion.div
              className={styles.submenu}
              initial="exit"
              animate={isOver ? 'enter' : 'exit'}
              variants={subMenuAnimate}
            >
              <Row className={styles.submenubackground}>
                <Col className={styles.submenucontainer1}>
                  <h3 className={styles.cat}>CATEGORIES</h3>
                  <Link to="/products/Kids/category/Baseball" className={styles.submenuitem}>Baseball</Link>
                  <Link to="/products/Kids/category/Basketball" className={styles.submenuitem}>Basketball</Link>
                  <Link to="/products/Kids/category/Boxing" className={styles.submenuitem}>Boxing</Link>
                  <Link to="/products/Kids/category/Football" className={styles.submenuitem}>Football</Link>
                  <Link to="/products/Kids/category/Golf" className={styles.submenuitem}>Golf</Link>
                  <Link to="/products/Kids/category/Hockey" className={styles.submenuitem}>Hockey</Link>
                  <Link to="/products/Kids/category/Running" className={styles.submenuitem}>Running</Link>
                  <Link to="/products/Kids/category/Skateboarding" className={styles.submenuitem}>Skateboarding</Link>
                  <Link to="/products/Kids/category/Soccer" className={styles.submenuitem}>Soccer</Link>
                  <Link to="/products/Kids/category/Weightlifting" className={styles.submenuitem}>Weightlifting</Link>
                </Col>
                <Col className={styles.submenucontainer2}>
                  <h3 className={styles.type}>TYPES</h3>
                  <Link to="/products/Kids/type/Belt" className={styles.submenuitem}>Belt</Link>
                  <Link to="/products/Kids/type/Elbow+Pad" className={styles.submenuitem}>Elbow Pad</Link>
                  <Link to="/products/Kids/type/Flip+Flop" className={styles.submenuitem}>Flip Flop</Link>
                  <Link to="/products/Kids/type/Glove" className={styles.submenuitem}>Glove</Link>
                  <Link to="/products/Kids/type/Hat" className={styles.submenuitem}>Hat</Link>
                  <Link to="/products/Kids/type/Headband" className={styles.submenuitem}>Headband</Link>
                  <Link to="/products/Kids/type/Helmet" className={styles.submenuitem}>Helmet</Link>
                  <Link to="/products/Kids/type/Hoodie" className={styles.submenuitem}>Hoodie</Link>
                  <Link to="/products/Kids/type/Jacket" className={styles.submenuitem}>Jacket</Link>
                  <Link to="/products/Kids/type/Pant" className={styles.submenuitem}>Pant</Link>
                  <Link to="/products/Kids/type/Pool+Noodle" className={styles.submenuitem}>Pool Noodle</Link>
                  <Link to="/products/Kids/type/Shin+Guard" className={styles.submenuitem}>Shin Guard</Link>
                  <Link to="/products/Kids/type/Shoe" className={styles.submenuitem}>Shoe</Link>
                  <Link to="/products/Kids/type/Short" className={styles.submenuitem}>Short</Link>
                  <Link to="/products/Kids/type/Sock" className={styles.submenuitem}>Sock</Link>
                  <Link to="/products/Kids/type/Sunglasses" className={styles.submenuitem}>Sunglasses</Link>
                  <Link to="/products/Kids/type/Tank+Top" className={styles.submenuitem}>Tank Top</Link>
                  <Link to="/products/Kids/type/Visor" className={styles.submenuitem}>Visor</Link>
                  <Link to="/products/Kids/type/Wristband" className={styles.submenuitem}>Wristband</Link>
                </Col>
              </Row>
            </motion.div>
          </motion.div>
        </div>
        {' '}
      </div>
    </div>
  );
}
