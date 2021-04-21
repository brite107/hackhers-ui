import React from 'react';
import styles from './Field.module.scss';

/**
 * @name Field
 * @description This component is a reuseable component that holds input fields.
 * @param name a prop passed to other components.
 * @param type a prop passed to other components.
 * @param value a prop passed to other components.
 * @param onChange is a prop that used in other components to.
 * determine what will happen on a user event.
 * @param id a prop passed to other components.
 * @param label a prop passed to other components as a label.
 */
const Field = ({
  name, type, value, onChange, id, label
}) => (
  <div>
    <label htmlFor={id}>
      {label}
    </label>
    <input
      className={styles.container}
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={(e) => onChange(e)}
    />
  </div>
);

export default Field;
