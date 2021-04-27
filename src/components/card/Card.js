import Card from 'react-bootstrap/Card';
import React from 'react';
import styles from './Card.module.scss';
import Button from '../button/Button';
import shoe from './picture.svg';

/**
 * @name Cards
 * @description This component creates a reusable card to be used throughout the app.
 * @param {title} param this component allows for the title of each card to be passed in.
 * @returns Card component
 */
export default function Cards({ title }) {
  return (
    <>
      <Card border="grey shadow mb-5 bg-white rounded" className={styles.card}>
        <Card.Body>
          <Card.Img variant="top pb-3" className={styles.image} src={shoe} />
          <Card.Text className={styles.title}>{title}</Card.Text>
          <Card.Text className={styles.cost}>
            <sup>$</sup>
            99.
            <sup>99</sup>
          </Card.Text>
          <Button text="View Details" />
        </Card.Body>
      </Card>
    </>
  );
}
