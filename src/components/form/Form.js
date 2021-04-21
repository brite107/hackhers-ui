import React from 'react';
import styles from './Form.module.scss';

/**
 * @name Form
 * @description This component is a reuseable component that holds a form and its children.
 * @param children children is a prop that is used in other componets
 * to hold differnt types of input feilds.
 * @param onSubmit is a prop that is passed in other components
 * to determine what will happen when the form submits.
 */
const Form = ({ children, onSubmit }) => (
  <form className={styles.main} onSubmit={onSubmit}>
    <div className={styles.upper}>Log In</div>
    {children}
    <div className={styles.lower} />
  </form>
);

export default Form;
