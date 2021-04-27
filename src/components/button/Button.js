import React from 'react';
import styles from './Button.module.scss';

const Button = ({ text, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={styles.btn}
  >
    {text}
  </button>
);

export default Button;
