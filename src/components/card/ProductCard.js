import Card from 'react-bootstrap/Card';
import React from 'react';
import styles from './ProductCard.module.scss';
import ModalDisplay from '../modal/ModalDisplay';

/**
 * @name Cards
 * @description This component creates a reusable card to be used throughout the app.
 * @param {title} param this component allows for the title of each card to be passed in.
 * @returns Card component
 */
export default function Cards({ product, imgUrl }) {
  const priceFixed = product.price.toFixed(2);
  const priceArray = priceFixed.toString().split('.');
  return (
    <>
      <Card border="bg-white rounded" className={styles.card}>
        <Card.Body>
          <Card.Img className={styles.image} src={imgUrl} />
          <Card.Text className={styles.title}>{product.name}</Card.Text>
          <Card.Text className={styles.cost}>
            <sup>$</sup>
            {priceArray[0]}
            <sup className={styles.cents}>{priceArray[1]}</sup>
          </Card.Text>
          <ModalDisplay product={product} />
        </Card.Body>
      </Card>
    </>
  );
}
