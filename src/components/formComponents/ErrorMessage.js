import React from 'react';

const ErrorMessage = ({ error }) => (
  <div className="invalid-feedback">
    {error?.message}
  </div>
);

export default ErrorMessage;
