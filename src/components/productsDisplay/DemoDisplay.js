import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import styles from './ProductDisplay.module.scss';
import ProductCard from '../card/ProductCard';
import PageLoadingSpinner from '../spinner/PageLoadingSpinner';
import ErrorMessage from './ErrorMessage';
import { PRODUCTS_ENDPOINT } from '../../utils/constants';

/**
 * Displays products category and type
 * @returns product category and type
 */
const DemoDisplay = () => {
  const { demographic } = useParams();
  const [error, setError] = useState(false);
  const [appState, setAppState] = useState({
    loading: false,
    products: null
  });
  /**
   * Makes a GET request to the api
   * @returns products data
   */
  useEffect(() => {
    setAppState({ loading: true });
    axios
      .get(`${PRODUCTS_ENDPOINT}?demographic=${demographic}`)
      .then((products) => {
        const allProducts = products.data;
        setAppState({ loading: false, products: allProducts });
      })
      .catch(() => {
        setAppState({ loading: false });
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 6000);
      });
  }, [demographic]);

  return (
    <div>
      {appState.loading && <PageLoadingSpinner />}
      <div>
        { error ? <ErrorMessage /> : (
          <Row>
            <h2 className={styles.breadcrumb}>{`${demographic}`}</h2>
          </Row>
        )}
      </div>
      <Row className="fluid">
        {appState.products && appState.products.map((product) => (
          <Col>
            <ProductCard
              className={styles.card}
              key={product.id}
              title={product.name}
              imgUrl={product.imageUrl}
              price={product.price}
              product={product}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default DemoDisplay;
