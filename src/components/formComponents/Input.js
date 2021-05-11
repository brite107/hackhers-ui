import React from 'react';
import ErrorMessage from './ErrorMessage';

const Input = ({
  label, type, name, id, placeholder, register, error, onChange
}) => (
  <div className="form-group pb-0 mb-0" style={{ height: '103px' }}>
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
      onChange={onChange}
    />
    {error && <ErrorMessage error={error} />}
  </div>
);
export default Input;
