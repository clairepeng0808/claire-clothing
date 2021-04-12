import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import SignInPage from './pages/SignInPage';
import Header from './components/Header';
import { auth } from './firebase/firebaseUtils';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    console.log(currentUser);
    return () => {
      unsubscribeFromAuth();
    };
  }, [currentUser]);

  return (
    <div className="container">
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
