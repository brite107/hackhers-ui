import React from 'react';
import { Modal, Image } from 'react-bootstrap';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ProductCard from '../card/ProductCard';
import styles from './modalDisplay.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * @name ModalDisplay
 * @description This component displays a modal with product details and an "Add to Cart" button.
 * @param {product} product This component takes in the product object.
 * @returns A modal displaing all product information and image.
 */
const ModalDisplay = ({
  product, open, handleClose
}) => {
  const priceFixed = product.price.toFixed(2);
  const priceArray = priceFixed.toString().split('.');

  return (
    <>
      <Modal
        size="xl"
        centered
        dialog
        className="modal-dialog-centered"
        show={open}
        onHide={handleClose}
        keyboard
      >
        <Modal.Body>
          <div>
            <FontAwesomeIcon icon={faWindowClose} className={styles.close} aria-hidden="true" onClick={handleClose} />
          </div>
          <div className="container p-0">
            <div className="row p-0">
              <div className="col-12 col-lg-7">
                <Image fluid src={product.imageUrl} alt="product" />
              </div>
              <div className="col-12 col-lg-5">
                <div className={styles.name}>
                  {product.name}
                </div>
                <div className={styles.price}>
                  <sup>$</sup>
                  {priceArray[0]}
                  <sup className={styles.cents}>{priceArray[1]}</sup>
                </div>
                <div className={styles.description}>
                  {product.description}
                </div>
                <div className={styles.demographics}>
                  {product.demographic}
                </div>
                <div className={styles.category}>
                  <b>Category: </b>
                  {product.category}
                </div>
                <div className={styles.type}>
                  <b>Type: </b>
                  {product.type}
                </div>
                <div className={styles.buttonContainer}>
                  <button type="button" className={styles.buttonCart}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalDisplay;
