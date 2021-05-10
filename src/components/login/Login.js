import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from '../form/Form';
import Input from '../formComponents/Input';
import styles from './Login.module.scss';
import FormLoadingSpinner from '../spinner/FormLoadingSpinner';
import { makeRequest, saveObjToSessionStorage } from '../../utils/Helper';
import { API_URL, LOGIN_EP, CUSTOMER_EP } from '../../utils/constants';

/**
 * @name Login
 * @description This component handles the login functionality
 * by making a call to the API and signing in registered customers.
 * @param props this component uses props to set the state of loggedIn and email.
 * @returns Login form
 */
const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(true);

  const history = useHistory();

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
  const getLoggedIn = async () => {
    setIsLoaded(false);
    try {
      const response = await makeRequest('post', API_URL + LOGIN_EP, {
        email,
        password
      });
      const { token } = response.data;
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('userEmail', email);
      props.setEmail(email);
      setTimeout(() => {
        setIsLoaded({ isLoaded: false });
      }, 3000); // TODO: Set to 1.5 seconds for demo
      if (response.status === 200) {
        setIsLoaded(true);
        await addCustomerToSessionStorage(email, token);
        sessionStorage.setItem('loggedIn', true);
        props.setLoggedIn(true);
        setError('');
        history.push('/');
      }
    } catch (err) {
      setIsLoaded(true);
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <div className={styles.loader}>
        {isLoaded ? null : (
          <FormLoadingSpinner isLoaded={isLoaded.loading} />
        )}
      </div>
      <Form>
        <div className={styles.error}>{error}</div>
        <div className={styles.upperForm}>
          <Input
            label="Email"
            id="email-input"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div />
          <Input
            label="Password"
            id="password-input"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div />
          <button className={styles.submit} type="button" onClick={getLoggedIn}>
            Submit
          </button>
          <div className={styles.signup}>
            <Link to="/signup">Not registered? Create an account here</Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
