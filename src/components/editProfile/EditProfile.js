import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router-dom';
import { CustomerSignUp } from '../../utils/validation';
import { STATE_ABBREVIATIONS, API_URL, CUSTOMER_EP } from '../../utils/constants';
import Form from '../formComponents/HookForm';
import Input from '../formComponents/Input';
import Select from '../formComponents/Select';
import styles from '../signup/Signup.module.scss';
import FormLoadingSpinner from '../spinner/FormLoadingSpinner';
import { getCustomer, getToken } from '../../utils/common';
import { makeRequest } from '../../utils/Helper';

const EditProfile = ({ setEmail }) => {
  const {
    register,
    errors,
    handleSubmit
  } = useForm({
    resolver: yupResolver(CustomerSignUp),
    mode: 'onBlur',
    defaultValues: getCustomer(),
    reValidateMode: 'onChange',
    shouldFocusError: true
  });

  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(true);

  const editCustomer = async (data) => {
    // disable the button while customer is being created
    setSubmitting(true);
    // display the loading spinner
    setIsLoaded(false);
    // removes an error message if there was one
    setErrorMessage('');
    // eslint-disable-next-line no-param-reassign
    let editedData = { ...data };
    delete editedData.confirmPassword;
    const { phoneNumber } = editedData;
    const numbersOnly = phoneNumber.replace(/\D/g, '');
    editedData = { ...editedData, phoneNumber: numbersOnly };
    // add the id to the customer data
    const { id } = getCustomer();
    editedData = { ...editedData, id };
    try {
      const token = getToken();
      const url = `${API_URL}${CUSTOMER_EP}/${id}`;
      const response = await makeRequest('put', url, editedData, {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      });
      if (response.status === 200) {
        // getLoggedIn(data);
        delete editedData.password;
        sessionStorage.setItem('customer', JSON.stringify(editedData));
        setEmail(data.email);
        setIsLoaded(true);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 10000);
        window.location.reload(false);
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 409) {
          setIsLoaded(true);
          setErrorMessage('Email is already in use');
        }
      } else {
        setIsLoaded(true);
        setErrorMessage('An unexpected error has occurred');
      }
    }
    setSubmitting(false);
  };

  return (
    <div className={styles.Signup}>

      {getToken() ? (
        <div className={styles.container}>
          {isLoaded ? null : (
            <FormLoadingSpinner />
          )}
          <Form
            onSubmit={handleSubmit(editCustomer)}
            title="Edit Profile"
            className="form-customer-entry mx-auto mt-5"
            submitting={submitting}
            buttonText="Update Profile"
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
                  label="Confirm/Update Password"
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
            <h5 className="text-center text-success mt-4">**Update successful**</h5>
            )}
            {errorMessage && (
            <h5 className="text-center text-danger mt-4">{errorMessage}</h5>
            )}
          </Form>
        </div>
      ) : <Redirect to={{ pathname: '/' }} />}

    </div>
  );
};

export default EditProfile;
