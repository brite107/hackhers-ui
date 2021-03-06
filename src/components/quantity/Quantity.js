import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight, faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import styles from './Quantity.module.scss';

const Quantity = () => {
  /**
 * @name Quantity
 * @description This component controls the quanity tracker on the modal
 * HINT: each "item" in our list names a name,
 * a boolean to tell if its been completed, and a quantity
 * @returns Quantity tracker.
 */
  const [items, setItems] = useState([
    { itemName: 'item 1', quantity: 1, isSelected: false }
  ]);

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity += 1;
    setItems(newItems);
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity -= 1;
    setItems(newItems);
  };

  return (
    <div className={`${styles.container} my-auto`}>
      {items.map((item, index) => (
        <div className={styles.quantity}>
          <button type="button">
            <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
          </button>
          <span>
            {' '}
            {item.quantity}
            {' '}
          </span>
          <button type="button">
            <FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
          </button>
        </div>
      ))}
      <div className={styles.total}>Quantity</div>
    </div>
  );
};

export default Quantity;
