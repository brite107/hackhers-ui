import React from 'react';
import ErrorMessage from './ErrorMessage';

/**
 *
 * @param {*} param0
 * @returns
 */
const Select = ({
  options, label, id, name, register, error
}) => (
  <div className="form-group mb-3">
    <label htmlFor={id} className="control-label">
      {label}
    </label>
    <select
      className={`form-control ip-3 ${error && 'is-invalid'}`}
      id={id}
      name={name}
      ref={register}
      error={error}
    >
      <option value="" />
      {options.map((option) => (
        <option
          value={option}
          key={option}
        >
          {option}
        </option>
      ))}
    </select>
    {error && <ErrorMessage error={error} />}
  </div>
);

export default Select;
