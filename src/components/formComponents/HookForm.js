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
        <div className={styles.submit}>
          <SubmitButton
            className={styles.btn}
            text="Create Account"
            disabled={submitting}
          />
        </div>
      </form>
    </div>
  </Container>
);

export default Form;
