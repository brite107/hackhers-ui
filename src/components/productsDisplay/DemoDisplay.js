import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import styles from './ProductDisplay.module.scss';
import ProductCard from '../card/ProductCard';
import PageLoadingSpinner from '../spinner/PageLoadingSpinner';
import ErrorMessage from './ErrorMessage';
import ProductPagination from '../pagination/ProductPagination';
import useFetchProducts from './useFetchProducts';
/**
 * Displays products category and type
 * @returns product category and type
 */
const DemoDisplay = () => {
  const [page, setPage] = useState(1);
  const { demographic } = useParams();
  const [params, setParams] = useState({
    demographic
  });
  const {
    products, loading, error, hasNextPage
  } = useFetchProducts(params, page);
  useEffect(() => {
    setParams({
      demographic
    });
    window.scrollTo(0, 0);
  }, [demographic]);
  return (
    <div className={styles.body}>
      <div>
        { error ? <ErrorMessage /> : (
          <Row>
            <h2 className={styles.breadcrumb}>{`${demographic}`}</h2>
            <div className="col-lg-12 col-centered">
              <ProductPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
            </div>
          </Row>
        )}
        {loading && <PageLoadingSpinner />}
      </div>
      <Row className="fluid">
        {products && products.map((product) => (
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
      <div className="col-lg-12 col-centered pb-1">
        <ProductPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      </div>
    </div>
  );
};
export default DemoDisplay;
