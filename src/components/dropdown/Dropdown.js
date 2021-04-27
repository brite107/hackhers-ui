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
        duration: 0.5
      },
      display: 'block'
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3
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
            <Link to="/Men">MEN</Link>
            <motion.div
              className={styles.submenu}
              initial="exit"
              animate={isHover ? 'enter' : 'exit'}
              variants={subMenuAnimate}
            >
              <Row className={styles.submenubackground}>
                <Col className={styles.submenucontainer1}>
                  <h3>CATEGORIES</h3>
                  <Link to="/products/men/baseball" className={styles.submenuitem}>Baseball</Link>
                  <Link to="/products/men/basketball" className={styles.submenuitem}>Basketball</Link>
                  <Link to="/products/men/boxing" className={styles.submenuitem}>Boxing</Link>
                  <Link to="/products/men/football" className={styles.submenuitem}>Football</Link>
                  <Link to="/products/men/golf" className={styles.submenuitem}>Golf</Link>
                  <Link to="/products/men/hockey" className={styles.submenuitem}>Hockey</Link>
                  <Link to="/products/men/running" className={styles.submenuitem}>Running</Link>
                  <Link to="/products/men/skateboarding" className={styles.submenuitem}>Skateboarding</Link>
                  <Link to="/products/men/soccer" className={styles.submenuitem}>Soccer</Link>
                  <Link to="/products/men/weightlifting" className={styles.submenuitem}>Weightlifting</Link>
                </Col>
                <Col className={styles.submenucontainer2}>
                  <h3>TYPES</h3>
                  <Link to="/products/men/belt" className={styles.submenuitem}>Belt</Link>
                  <Link to="/products/men/elbowpad" className={styles.submenuitem}>Elbow Pad</Link>
                  <Link to="/products/men/flipflop" className={styles.submenuitem}>Flip Flop</Link>
                  <Link to="/products/men/glove" className={styles.submenuitem}>Glove</Link>
                  <Link to="/products/men/hat" className={styles.submenuitem}>Hat</Link>
                  <Link to="/products/men/headband" className={styles.submenuitem}>Headband</Link>
                  <Link to="/products/men/helmet" className={styles.submenuitem}>Helmet</Link>
                  <Link to="/products/men/hoodie" className={styles.submenuitem}>Hoodie</Link>
                  <Link to="/products/men/jacket" className={styles.submenuitem}>Jacket</Link>
                  <Link to="/products/men/pant" className={styles.submenuitem}>Pant</Link>
                  <Link to="/products/men/poolnoodle" className={styles.submenuitem}>Pool Noodle</Link>
                  <Link to="/products/men/shinguard" className={styles.submenuitem}>Shin Guard</Link>
                  <Link to="/products/men/shoe" className={styles.submenuitem}>Shoe</Link>
                  <Link to="/products/men/short" className={styles.submenuitem}>Short</Link>
                  <Link to="/products/men/sock" className={styles.submenuitem}>Sock</Link>
                  <Link to="/products/men/sunglasses" className={styles.submenuitem}>Sunglasses</Link>
                  <Link to="/products/men/tanktop" className={styles.submenuitem}>Tank Top</Link>
                  <Link to="/products/men/visor" className={styles.submenuitem}>Visor</Link>
                  <Link to="/products/men/wristband" className={styles.submenuitem}>Wristband</Link>
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
            <Link to="/Women">WOMEN</Link>
            <motion.div
              className={styles.submenu}
              initial="exit"
              animate={isMouse ? 'enter' : 'exit'}
              variants={subMenuAnimate}
            >
              <Row className={styles.submenubackground}>
                <Col className={styles.submenucontainer1}>
                  <h3>CATEGORIES</h3>
                  <Link to="/products/women/baseball" className={styles.submenuitem}>Baseball</Link>
                  <Link to="/products/women/basketball" className={styles.submenuitem}>Basketball</Link>
                  <Link to="/products/women/boxing" className={styles.submenuitem}>Boxing</Link>
                  <Link to="/products/women/football" className={styles.submenuitem}>Football</Link>
                  <Link to="/products/women/golf" className={styles.submenuitem}>Golf</Link>
                  <Link to="/products/women/hockey" className={styles.submenuitem}>Hockey</Link>
                  <Link to="/products/women/running" className={styles.submenuitem}>Running</Link>
                  <Link to="/products/women/skateboarding" className={styles.submenuitem}>Skateboarding</Link>
                  <Link to="/products/women/soccer" className={styles.submenuitem}>Soccer</Link>
                  <Link to="/products/women/weightlifting" className={styles.submenuitem}>Weightlifting</Link>
                </Col>
                <Col className={styles.submenucontainer2}>
                  <h3>TYPES</h3>
                  <Link to="/products/women/belt" className={styles.submenuitem}>Belt</Link>
                  <Link to="/products/women/elbowpad" className={styles.submenuitem}>Elbow Pad</Link>
                  <Link to="/products/women/flipflop" className={styles.submenuitem}>Flip Flop</Link>
                  <Link to="/products/women/glove" className={styles.submenuitem}>Glove</Link>
                  <Link to="/products/women/hat" className={styles.submenuitem}>Hat</Link>
                  <Link to="/products/women/headband" className={styles.submenuitem}>Headband</Link>
                  <Link to="/products/women/helmet" className={styles.submenuitem}>Helmet</Link>
                  <Link to="/products/women/hoodie" className={styles.submenuitem}>Hoodie</Link>
                  <Link to="/products/women/jacket" className={styles.submenuitem}>Jacket</Link>
                  <Link to="/products/women/pant" className={styles.submenuitem}>Pant</Link>
                  <Link to="/products/women/poolnoodle" className={styles.submenuitem}>Pool Noodle</Link>
                  <Link to="/products/women/shinguard" className={styles.submenuitem}>Shin Guard</Link>
                  <Link to="/products/women/shoe" className={styles.submenuitem}>Shoe</Link>
                  <Link to="/products/women/short" className={styles.submenuitem}>Short</Link>
                  <Link to="/products/women/sock" className={styles.submenuitem}>Sock</Link>
                  <Link to="/products/women/sunglasses" className={styles.submenuitem}>Sunglasses</Link>
                  <Link to="/products/women/tanktop" className={styles.submenuitem}>Tank Top</Link>
                  <Link to="/products/women/visor" className={styles.submenuitem}>Visor</Link>
                  <Link to="/products/women/wristband" className={styles.submenuitem}>Wristband</Link>
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
            <Link to="/Kids">KIDS</Link>
            <motion.div
              className={styles.submenu}
              initial="exit"
              animate={isOver ? 'enter' : 'exit'}
              variants={subMenuAnimate}
            >
              <Row className={styles.submenubackground}>
                <Col className={styles.submenucontainer1}>
                  <h3>CATEGORIES</h3>
                  <Link to="/products/kids/baseball" className={styles.submenuitem}>Baseball</Link>
                  <Link to="/products/kids/basketball" className={styles.submenuitem}>Basketball</Link>
                  <Link to="/products/kids/boxing" className={styles.submenuitem}>Boxing</Link>
                  <Link to="/products/kids/football" className={styles.submenuitem}>Football</Link>
                  <Link to="/products/kids/golf" className={styles.submenuitem}>Golf</Link>
                  <Link to="/products/kids/hockey" className={styles.submenuitem}>Hockey</Link>
                  <Link to="/products/kids/running" className={styles.submenuitem}>Running</Link>
                  <Link to="/products/kids/skateboarding" className={styles.submenuitem}>Skateboarding</Link>
                  <Link to="/products/kids/soccer" className={styles.submenuitem}>Soccer</Link>
                  <Link to="/products/kids/weightlifting" className={styles.submenuitem}>Weightlifting</Link>
                </Col>
                <Col className={styles.submenucontainer2}>
                  <h3>TYPES</h3>
                  <Link to="/products/kids/belt" className={styles.submenuitem}>Belt</Link>
                  <Link to="/products/kids/elbowpad" className={styles.submenuitem}>Elbow Pad</Link>
                  <Link to="/products/kids/flipflop" className={styles.submenuitem}>Flip Flop</Link>
                  <Link to="/products/kids/glove" className={styles.submenuitem}>Glove</Link>
                  <Link to="/products/kids/hat" className={styles.submenuitem}>Hat</Link>
                  <Link to="/products/kids/headband" className={styles.submenuitem}>Headband</Link>
                  <Link to="/products/kids/helmet" className={styles.submenuitem}>Helmet</Link>
                  <Link to="/products/kids/hoodie" className={styles.submenuitem}>Hoodie</Link>
                  <Link to="/products/kids/jacket" className={styles.submenuitem}>Jacket</Link>
                  <Link to="/products/kids/pant" className={styles.submenuitem}>Pant</Link>
                  <Link to="/products/kids/poolnoodle" className={styles.submenuitem}>Pool Noodle</Link>
                  <Link to="/products/kids/shinguard" className={styles.submenuitem}>Shin Guard</Link>
                  <Link to="/products/kids/shoe" className={styles.submenuitem}>Shoe</Link>
                  <Link to="/products/kids/short" className={styles.submenuitem}>Short</Link>
                  <Link to="/products/kids/sock" className={styles.submenuitem}>Sock</Link>
                  <Link to="/products/kids/sunglasses" className={styles.submenuitem}>Sunglasses</Link>
                  <Link to="/products/kids/tanktop" className={styles.submenuitem}>Tank Top</Link>
                  <Link to="/products/kids/visor" className={styles.submenuitem}>Visor</Link>
                  <Link to="/products/kids/wristband" className={styles.submenuitem}>Wristband</Link>
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
