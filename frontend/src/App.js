import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import store from './store';
import Home from './components/Home';
import Profile from './components/Profile';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'; 
import Alert from './components/Alert';
import {loadUser} from './actions/auth';

const NotFound = () => (
  <div className='container mt-4'>
    <h2>404 Error Page Not Found</h2>
    <span >Go To Home Page </span>
    <Link to="/Home"className='btn btn-primary'>Home</Link>
  </div>
);

const App = () => {
  store.dispatch(loadUser())
  return (
    <Provider store={store}>
        <Router>
          <Fragment>
            <Alert />
              <Routes>
                  <Route path="/" element={<PrivateRoute />} >
                    <Route path="Home" element={<Home />} />
                    <Route path="Profile" element={<Profile />} />
                  </Route>
                  <Route path="/Login" element={<Login />} />
                  <Route path="/Register" element={<Register />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </Fragment>
        </Router>
    </Provider>
  );
};

export default App;