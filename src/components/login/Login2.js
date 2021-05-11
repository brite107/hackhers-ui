import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { makeRequest, saveObjToSessionStorage } from '../../utils/Helper';
import Form from '../formComponents/HookForm';
import Input from '../formComponents/Input';
import FormLoadingSpinner from '../spinner/FormLoadingSpinner';
import { LoginValidation } from '../../utils/validation';
import styles from './Login.module.scss';
import {
  API_URL, LOGIN_EP, CUSTOMER_EP
} from '../../utils/constants';

const Login2 = ({ setEmail, setLoggedIn }) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const {
    register,
    errors,
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(LoginValidation),
    mode: 'onBlur',
    defaultValues: {},
    reValidateMode: 'onChange',
    shouldFocusError: true
  });

  const addCustomerToSessionStorage = async (customerEmail, token) => {
    // make call to backend to get customer information
    const response = await makeRequest('get', `${API_URL}${CUSTOMER_EP}?email=${customerEmail}`, {}, {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    const customer = response.data[0];
    // remove the password from the object
    delete customer.password;
    // save the object to session storage
    saveObjToSessionStorage('customer', customer);
  };

  /**
   * This function makes a POST call to the hackhers api at the /login endpoint to
   *  validate the login credintials and role of the customer.
   * It also sets the state of loggedIn and email, so that they can be passed to the navigation bar.
   */
  const getLoggedIn = async (data) => {
    setIsLoaded(false);
    const { email, password } = data;
    try {
      const response = await makeRequest('post', API_URL + LOGIN_EP, {
        email,
        password
      });
      const { token } = response.data;
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('userEmail', email);
      setEmail(email);
      setTimeout(() => {
        setIsLoaded({ isLoaded: false });
      }, 3000); // TODO: Set to 1.5 seconds for demo
      if (response.status === 200) {
        setIsLoaded(true);
        await addCustomerToSessionStorage(email, token);
        sessionStorage.setItem('loggedIn', true);
        setLoggedIn(true);
        setErrorMessage('');
        history.push('/');
      }
    } catch (err) {
      setIsLoaded(true);
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className={styles.Signup}>
      <div className={styles.container}>
        {isLoaded ? null : (
          <FormLoadingSpinner />
        )}
        <Form
          onSubmit={handleSubmit(getLoggedIn)}
          title="Sign In"
          className="form-customer-entry mx-auto p-5"
          submitting={submitting}
          buttonText="Submit"
        >
          <Row>
            <Col lg={12}>
              <Input
                label="Email"
                type="email"
                name="email"
                id="inputEmail"
                register={register}
                error={errors.email}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Input
                label="Password"
                type="password"
                name="password"
                id="inputPassword"
                register={register}
                error={errors.password}
              />
            </Col>
          </Row>
          {errorMessage && (
          <h5 className="text-center text-danger">{errorMessage}</h5>
          )}
          <div className={styles.link}>
            <Link to="/signup">Not registered? Create an account here</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login2;
