import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import styles from './NewProducts.module.scss';
import ProductCard from '../card/ProductCard';
import ErrorMessage from '../productsDisplay/ErrorMessage';
import { PRODUCTS_ENDPOINT } from '../../utils/constants';

/**
 * Displays top 3 new products for each demographic
 * @returns new products
 */
const NewProducts = () => {
  const [error, setError] = useState(false);
  const newMen = `${PRODUCTS_ENDPOINT}/newest?demographic=Men`;
  const newWomen = `${PRODUCTS_ENDPOINT}/newest?demographic=Women`;
  const newKids = `${PRODUCTS_ENDPOINT}/newest?demographic=Kids`;
  const [men, setMen] = useState({ products: [] });
  const [women, setWomen] = useState({ products: [] });
  const [kids, setKids] = useState({ products: [] });
  /**
   * Makes a GET request to the api
   * @returns products data
   */
  useEffect(() => {
    axios
      .get(newMen)
      .then((products) => {
        const menProducts = products.data;
        setMen({ products: menProducts });
      })
      .catch(() => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 6000);
      });
    axios
      .get(newWomen)
      .then((products) => {
        const womenProducts = products.data;
        setWomen({ products: womenProducts });
      })
      .catch(() => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 6000);
      });
    axios
      .get(newKids)
      .then((products) => {
        const kidProducts = products.data;
        setKids({ products: kidProducts });
      })
      .catch(() => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 6000);
      });
  }, [newKids, newMen, newWomen]);
  return (
    <div className={styles.products}>
      <div>
        { error && <ErrorMessage />}
      </div>
      <h2 className={styles.men}>Men&apos;s Newest Products</h2>
      <Row className="fluid">
        {men.products && men.products.slice(0, 3).map((product) => (
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
      <h2 className={styles.women}>Women&apos;s Newest Products</h2>
      <Row className="fluid">
        {women.products && women.products.slice(0, 3).map((product) => (
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
      <h2 className={styles.kids}>Kids&apos; Newest Products</h2>
      <Row className="fluid">
        {kids.products && kids.products.slice(0, 3).map((product) => (
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
export default NewProducts;
