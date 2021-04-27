import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';
import { CustomerSignUp } from '../../utils/validation';
import { STATE_ABBREVIATIONS, CUSTOMER_ENDPOINT, LOGIN_ENDPOINT } from '../../utils/constants';
import Form from '../formComponents/HookForm';
import Input from '../formComponents/Input';
import Select from '../formComponents/Select';
import styles from './Signup.module.scss';
import LoadingSpinner from '../spinner/LoadingSpinner';
/**
 * This page displays a sign up form
 * @param setLoggedIn a function from the app component that sets the LoggedIn state
 * @param setEmail a function from the app component that sets the Email
 */
const Signup = ({ setLoggedIn, setEmail }) => {
  const {
    register,
    errors,
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(CustomerSignUp),
    mode: 'onBlur',
    defaultValues: {},
    reValidateMode: 'onChange',
    shouldFocusError: true
  });

  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(true);

  const history = useHistory();

  /**
   * This function makes a POST call to the hackhers api at the /login endpoint to
   *  validate the login credintials and role of the customer.
   * It also sets the state of loggedIn and email, so that they can be passed to the navigation bar.
   *  * @param {*} data -- the form data
   */
  const getLoggedIn = async (data) => {
    setIsLoaded(false);
    const { email, password } = data;
    try {
      await axios({
        method: 'POST',
        url: LOGIN_ENDPOINT,
        data: {
          email,
          password
        }
      }).then((response) => {
        const { token } = response.data;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('userEmail', data.email);
        setEmail(data.email);
        if (response.status === 200) {
          setIsLoaded(true);
          sessionStorage.setItem('loggedIn', true);
          setLoggedIn(true);
          history.push('/');
        }
      });
    } catch (err) {
      setIsLoaded(true);
      setErrorMessage('Invalid username or password');
    }
  };

  /**
   * This function makes a POST call to the hackhers api at the /customers endpoint to
   *  create a customer.
   * @param {*} data -- the form data
   */
  const createCustomer = async (data) => {
    // disable the button while customer is being created
    setSubmitting(true);
    // removes an error message if there was one
    setErrorMessage('');
    // eslint-disable-next-line no-param-reassign
    delete data.confirmPassword;
    const { phoneNumber } = data;
    const numbersOnly = phoneNumber.replace(/\D/g, '');
    // eslint-disable-next-line no-param-reassign
    data = { ...data, phoneNumber: numbersOnly };
    try {
      const response = await axios.post(CUSTOMER_ENDPOINT, data);
      if (response.status === 201) {
        getLoggedIn(data);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 10000);
        setLoggedIn(true);
        reset();
      }
    } catch (err) {
      if (err.response.status === 409) {
        setErrorMessage('Email is already in use');
      } else {
        setErrorMessage('An unexpected error has occurred.');
      }
    }
    setSubmitting(false);
  };

  return (
    <div className={styles.Signup}>
      {isLoaded ? null : (
        <LoadingSpinner />
      )}
      <div className={styles.container}>
        <Form
          onSubmit={handleSubmit(createCustomer)}
          title="Sign Up"
          className="form-customer-entry mx-auto mt-5 w-50"
          submitting={submitting}
        >
          <Row>
            <Col lg={6}>
              <Input
                label="First Name"
                type="text"
                name="firstName"
                id="inputFirstName"
                register={register}
                error={errors.firstName}
              />
            </Col>
            <Col lg={6}>
              <Input
                label="Last Name"
                type="text"
                name="lastName"
                id="inputLastName"
                register={register}
                error={errors.lastName}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Input
                label="Email"
                type="email"
                name="email"
                id="inputEmail"
                register={register}
                error={errors.email}
              />
            </Col>
            <Col lg={6}>
              <Input
                label="Phone Number"
                type="text"
                name="phoneNumber"
                id="inputPhoneNumber"
                register={register}
                error={errors.phoneNumber}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Input
                label="Password"
                type="password"
                name="password"
                id="inputPassword"
                register={register}
                error={errors.password}
              />
            </Col>
            <Col lg={6}>
              <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                id="inputConfirmPassword"
                register={register}
                error={errors.confirmPassword}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Input
                label="Street"
                type="text"
                name="street"
                id="inputStreet"
                register={register}
                error={errors.street}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Input
                label="City"
                type="text"
                name="city"
                id="inputCity"
                register={register}
                error={errors.city}
              />
            </Col>
            <Col lg={2}>
              <Select
                options={STATE_ABBREVIATIONS}
                label="State"
                id="state"
                name="state"
                register={register}
                error={errors.state}
              />
            </Col>
            <Col lg={4}>
              <Input
                label="Zip Code"
                type="text"
                name="zipCode"
                id="inputZipCode"
                register={register}
                error={errors.zipCode}
              />
            </Col>
          </Row>

          {!Object.keys(errors).length && success && (
          <h5 className="text-center text-success mt-4">**Form submitted successfully**</h5>
          )}
          {errorMessage && (
          <h5 className="text-center text-danger mt-4">{errorMessage}</h5>
          )}
        </Form>
      </div>
    </div>

  );
};

export default Signup;
