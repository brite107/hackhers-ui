import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import styles from './ProductPagination.module.scss';

const ProductPagination = ({ page, setPage, hasNextPage }) => {
  function adjustPage(amount) {
    setPage((prevPage) => prevPage + amount);
  }

  return (
    <Pagination className={styles.pagination}>
      {page !== 1 && <Pagination.Prev onClick={() => adjustPage(-1)} />}
      {page !== 1 && <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>}
      {page > 2 && <Pagination.Ellipsis />}
      {page > 2 && <Pagination.Item onClick={() => adjustPage(-1)}>{page - 1}</Pagination.Item>}
      <Pagination.Item active activeLabel="" className={styles.active}>{page}</Pagination.Item>
      {hasNextPage && <Pagination.Item onClick={() => adjustPage(1)}>{page + 1}</Pagination.Item>}
      {hasNextPage && <Pagination.Next onClick={() => adjustPage(+1)} />}
    </Pagination>
  );
};

export default ProductPagination;
