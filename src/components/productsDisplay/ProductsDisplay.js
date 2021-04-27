import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDisplay.module.scss';
/**
 * Displays products category and type
 * @returns product category and type
 */
const ProductsDisplay = () => {
  const { demographic, group } = useParams();
  return (
    <div>
      <h2 className={styles.header}>{`Products: ${demographic}'s ${group}`}</h2>
    </div>
  );
};
export default ProductsDisplay;
