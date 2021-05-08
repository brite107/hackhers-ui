import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Homepage from '../homepage/Homepage';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import SiteHeader from '../site-header/SiteHeader';
import styles from './App.module.scss';
import { getToken, getUserEmail } from '../../utils/common';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteFooter from '../site-footer/SiteFooter';
import Dropdown from '../dropdown/Dropdown';
import ProductsDisplay from '../productsDisplay/ProductsDisplay';
import DemoDisplay from '../productsDisplay/DemoDisplay';
import ShoppingCart from '../shoppingCart/ShoppingCart';
import EditProfile from '../editProfile/EditProfile';
import ErrorMessage from '../productsDisplay/ErrorMessage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  /**
   * This function sets the state of loggedIn,
   * email depedning on if the user is logged (token) when the page loads.
   */
  useEffect(() => {
    if (getToken() && getUserEmail()) {
      setLoggedIn(true);
      setEmail(getUserEmail());
    } else {
      setLoggedIn(false);
      setEmail('');
    }
  }, []);
  /**
   * This function clears the session storage and logs the user out of the system.
   */
  const handleLogout = () => {
    setLoggedIn(false);
    setEmail('');
    sessionStorage.clear();
  };

  return (
    <Router>
      <div className={styles.App}>
        <SiteHeader
          email={email}
          isLoggedIn={loggedIn}
          handleLogout={handleLogout}
          dropdown={<Dropdown />}
        />
        {error && <ErrorMessage />}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Homepage />
            )}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <Login
                setLoggedIn={setLoggedIn}
                setEmail={setEmail}
              />
            )}
          />
          <Route path="/signup" exact render={() => <Signup setEmail={setEmail} setLoggedIn={setLoggedIn} />} />
          <Route path="/customers/edit/:id" exact render={() => <EditProfile setEmail={setEmail} setError={setError} />} />
          <Route path="/products/:demographic/:group/:value" component={ProductsDisplay} />
          <Route path="/products/:demographic" component={DemoDisplay} />
          <Route path="/shoppingCart" component={ShoppingCart} exact />
        </Switch>
      </div>
      <SiteFooter />
    </Router>
  );
};
export default App;
