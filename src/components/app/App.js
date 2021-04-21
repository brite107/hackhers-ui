import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Homepage from '../homepage/Homepage';
import Men from '../men/Men';
import Kids from '../kids/Kids';
import Women from '../women/Women';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import SiteHeader from '../site-header/SiteHeader';
import styles from './App.module.scss';
import { getToken, getUserEmail } from '../../utils/common';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

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
        />
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
          <Route path="/signup" exact render={() => <Signup email={email} setEmail={setEmail} setLoggedIn={setLoggedIn} />} />
          <Route path="/men" component={Men} exact />
          <Route path="/women" component={Women} exact />
          <Route path="/kids" component={Kids} exact />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
