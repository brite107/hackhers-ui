import React from 'react';
import Container from 'react-bootstrap/Container';
import SubmitButton from './SubmitButton';
import styles from './HookForm.module.scss';

const Form = ({
  children, title, onSubmit, className, submitting
}) => (
  <Container>
    <div className={styles.form}>
      <form onSubmit={onSubmit} className={className} noValidate>
        <h1 className="mb-4 fw-normal text-center">{title}</h1>
        {children}
        <SubmitButton
          className="btn btn-lg btn-dark mt-5 w-100"
          text="Create Account"
          disabled={submitting}
        />
      </form>
    </div>
  </Container>
);

export default Form;
