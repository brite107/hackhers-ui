import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './modalDisplay.module.scss';
// import Quantity from '../quantity/Quantity';

/**
 * @name ModalDisplay
 * @description This component displays a modal with product details and an "Add to Cart" button.
 * @param {product} product This component takes in the product object.
 * @returns A modal displaing all product information and image.
 */
const ModalDisplay = ({ product }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const priceFixed = product.price.toFixed(2);
  const priceArray = priceFixed.toString().split('.');
  return (
    <>
      <button type="button" className={styles.buttonDetails} onClick={handleShow}>
        VIEW DETAILS
      </button>
      <Modal
        size="xl"
        centered
        dialog
        className="modal-dialog-centered"
        show={show}
        onHide={handleClose}
        keyboard
      >
        <Modal.Body className={styles.body}>
          <div>
            <FontAwesomeIcon icon={faWindowClose} className={styles.close} aria-hidden="true" onClick={handleClose} />
          </div>
          <div className={styles.container} container-fluid>
            <div className="row no-gutters">
              <div className="col-md-6">
                <img className={styles.image} src={product.imageUrl} alt="product" />
              </div>
              <div className="col-md-6">
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
                {/* <Quantity className={'{styles.footer} justify-content-center;'} /> */}
                <button type="button" className={styles.buttonCart}>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalDisplay;
