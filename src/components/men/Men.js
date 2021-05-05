import React from 'react';
import styles from './Men.module.scss';
import ProductCard from '../card/ProductCard';

const Men = () => (
  <div className={styles.container}>
    <h1 className={styles.demographics}>Men</h1>
    <ProductCard
      title="MEN&apos;S SHOE"
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUDB7o6sBmV_yAelIhMehBrfJVaBa495m8g&usqp=CAU"
      price={15.99}
    />
  </div>
);
export default Men;
