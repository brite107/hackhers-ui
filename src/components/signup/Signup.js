import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import { CustomerSignUp } from '../../utils/validation';
import { STATE_ABBREVIATIONS, CUSTOMER_ENDPOINT } from '../../utils/constants';
import Form from '../formComponents/HookForm';
import Input from '../formComponents/Input';
import ErrorMessage from '../formComponents/ErrorMessage';

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
  const [formError, setFormError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  // const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const history = useHistory();

  /**
   * This function makes a POST call to the hackhers api at the /login endpoint to
   *  validate the login credintials and role of the customer.
   * It also sets the state of loggedIn and email, so that they can be passed to the navigation bar.
   *  * @param {*} data -- the form data
   */
  const getLoggedIn = async (data) => {
    const { email, password } = data;
    try {
      await axios({
        method: 'POST',
        url: 'http://localhost:8080/login',
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
          sessionStorage.setItem('loggedIn', true);
          setLoggedIn(true);
          // setError('');
          history.push('/');
        }
      });
    } catch (err) {
      setFormError('Invalid username or password');
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
    setFormError(false);
    // eslint-disable-next-line no-param-reassign
    delete data.confirmPassword;
    // setEmail(data.email);
    // setPassword(data.password);
    try {
      await axios({
        method: 'post',
        url: CUSTOMER_ENDPOINT,
        data,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response.status === 201) {
          getLoggedIn(data);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 10000);
          setLoggedIn(true);
          reset();
        }
      });
    } catch (err) {
      setFormError(true);
    }
    setSubmitting(false);
  };

  return (
    <>
      {redirect && <Redirect to="/" />}
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
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="state" className="control-label">
              State
            </label>
            <select
              className={`form-control ip-3 ${errors.state && 'is-invalid'}`}
              id="state"
              name="state"
              ref={register}
              error={errors.state}
            >
              <option value="" />
              {STATE_ABBREVIATIONS.map((state) => (
                <option
                  value={state}
                  key={state}
                >
                  {state}
                </option>
              ))}
            </select>
            {errors.state && <ErrorMessage error={errors.state} />}
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
        {formError && (
        <h5 className="text-center text-danger mt-4">**An error has occurred**</h5>
        )}
      </Form>
    </>
  );
};

export default Signup;
