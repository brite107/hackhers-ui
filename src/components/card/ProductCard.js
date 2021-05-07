import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import styles from './ProductCard.module.scss';
import ModalDisplay from '../modal/ModalDisplay';

/**
 * @name Cards
 * @description This component creates a reusable card to be used throughout the app.
 * @param {title} param this component allows for the title of each card to be passed in.
 * @returns Card component
 */
export default function Cards({ product, imgUrl }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const priceFixed = product.price.toFixed(2);
  const priceArray = priceFixed.toString().split('.');
  return (
    <div>
      <Card border="bg-white rounded" hoverable className={styles.card}>
        <Card.Body onClick={handleOpen}>
          <Card.Img className={styles.image} src={imgUrl} />
          <Card.Text className={styles.title}>{product.name}</Card.Text>
          <Card.Text className={styles.cost}>
            <sup>$</sup>
            {priceArray[0]}
            <sup className={styles.cents}>{priceArray[1]}</sup>
          </Card.Text>
          <button type="button" className={styles.buttonDetails} onClick={handleOpen}>
            VIEW DETAILS
          </button>
        </Card.Body>
      </Card>
      <ModalDisplay
        product={product}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        className={styles.buttonDetails}
      />
    </div>
  );
}
