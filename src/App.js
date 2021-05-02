import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import SignInPage from './pages/SignInPage';
import Header from './components/Header';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { setCurrentUser } from './redux/user/userActions';
import { useDispatch } from 'react-redux';

const App = () => {
  // const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // Whenever we call the onAuthStateChanged() or onSnapshot() methods from our auth library or referenceObject, we get back a function that lets us unsubscribe from the listener we just instantiated.
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
        return;
      }
      // if null
      dispatch(setCurrentUser(userAuth));
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(currentUser);
  // }, [currentUser]);

  return (
    <div className="container">
      <div className="App">
        <Header />
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
