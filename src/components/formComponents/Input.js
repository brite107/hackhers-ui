import React from 'react';
import ErrorMessage from './ErrorMessage';

const Input = ({
  label, type, name, id, placeholder, register, error
}) => (
  <div className="form-group mb-3">
    <label htmlFor={id}>
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`form-control ${error && 'is-invalid'}`}
      ref={register}
    />
    {error && <ErrorMessage error={error} />}
  </div>
);

export default Input;
