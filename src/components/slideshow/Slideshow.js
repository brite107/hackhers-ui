import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useHistory } from 'react-router-dom';
import Womens from './Womens.svg';
import Sunglasses from './sunshades.svg';
import Guards from './shingaurds.svg';
import styles from './Slideshow.module.scss';

/**
 * @name Slideshow
 * @description This component holds renders the slideshow. It includes three advertisements.
 * @returns Slideshow with adds.
 */
const Slideshow = () => {
  const history = useHistory();

  const toKids = () => {
    history.push('/products/kids/shinguard');
  };

  const toWomens = () => {
    history.push('/products/women/pant');
  };

  const toSunglasses = () => {
    history.push('/products/men/sunglasses');
  };

  return (
    <Carousel className={styles.carousel} nextLabel="" prevLabel="" pause={false} wrap interval={10000}>
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
  );
};

export default Slideshow;
