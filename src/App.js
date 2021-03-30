import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="container">
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
