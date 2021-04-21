import React from 'react';

const SubmitButton = ({ className, text }) => (
  <button className={className} type="submit">
    {text}
  </button>
);

export default SubmitButton;
