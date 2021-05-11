import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useHistory } from 'react-router-dom';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import Womens from './Womens.svg';
import Sunglasses from './sunshades.svg';
import Guards from './shingaurds.svg';
import styles from './Slideshow.module.scss';
import './Slideshow.css';

/**
 * @name Slideshow
 * @description This component holds renders the slideshow. It includes three advertisements.
 * @returns Slideshow with adds.
 */
const Slideshow = () => {
  const history = useHistory();

  const toKids = () => {
    history.push('/products/Kids/type/Shin+Guard');
  };

  const toWomens = () => {
    history.push('/products/Women/type/Pant');
  };

  const toSunglasses = () => {
    history.push('/products/Women/type/Sunglasses');
  };

  return (
<<<<<<< HEAD
    <div>
=======
    <div className="Slideshow">
>>>>>>> c69b46710559ce4d34d0f2de17ffa72a33a6564b
      <div className={styles.margin}>Free shipping on orders over $25</div>
      <div className={styles.my__carousel_main}>
        <Carousel
          className={styles.carousel}
          nextLabel=""
          prevLabel=""
          pause="hover"
          wrap
          interval={10000}
          nextIcon={<FaChevronCircleRight size={50} />}
          prevIcon={<FaChevronCircleLeft size={50} />}
        >
          <Carousel.Item
            interval={10000}
            onClick={toWomens}
          >
            <img
              className="d-bloclk w-100"
              src={Womens}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item
            interval={10000}
            onClick={toKids}
          >
            <img
              className="d-block w-100"
              src={Guards}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item
            interval={10000}
            onClick={toSunglasses}
          >
            <img
              className="d-block w-100"
              src={Sunglasses}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Slideshow;
