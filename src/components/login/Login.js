import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Form from '../form/Form';
import Input from '../formComponents/Input';
import styles from './Login.module.scss';
import LoadingSpinner from '../spinner/LoadingSpinner';

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
  const [isLoaded, setIsLoaded] =useState(true);

  const history = useHistory();

  /**
   * This function makes a POST call to the hackhers api at the /login endpoint to
   *  validate the login credintials and role of the customer.
   * It also sets the state of loggedIn and email, so that they can be passed to the navigation bar.
   */
  const getLoggedIn = async () => {
    setIsLoaded(false);
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
        sessionStorage.setItem('userEmail', email);
        props.setEmail(email);
        if (response.status === 200) {
          setIsLoaded(true);
          sessionStorage.setItem('loggedIn', true);
          props.setLoggedIn(true);
          setError('');
          history.push('/');
        }
      });
    } catch (err) {
      setIsLoaded(true);
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      {isLoaded ? null : (
        <LoadingSpinner/>
      )}
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
