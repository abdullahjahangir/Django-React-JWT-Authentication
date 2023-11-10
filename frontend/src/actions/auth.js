import axios from 'axios';

const getConfig = (getState) => {
  const state = getState();
  const token = state.auth.token;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: 'USER_LOADING' });

  const config = getConfig(getState);

  axios
    .get('http://127.0.0.1:8000/api/auth/user', config)
    .then((res) => {
      dispatch({
        type: 'USER_LOADED',
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: 'AUTH_ERROR',
        payload: null,
      });
    });
};


// LOGIN USER
export const login = (username, password) => (dispatch, getState) => {
  const config = getConfig(getState);

  const body = JSON.stringify({ username, password });

  axios
    .post('http://127.0.0.1:8000/api/auth/login', body, config)
    .then((res) => {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data,
      });
    })
    .catch((err) => {
      if (!err.response) {
        // Network error (server offline or unreachable)
        dispatch({
          type: 'LOGIN_FAIL',
          payload: `Server is offline or unreachable. Please try again later.`,
        });
      }else{
        dispatch({
          type: 'LOGIN_FAIL',
          payload: 'Credentials Do Not Match',
        });
      }
      
    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  const config = getConfig(getState);

  axios
    .post('http://127.0.0.1:8000/api/auth/logout', null, config)
    .then(() => {
      dispatch({
        type: 'LOGOUT_SUCCESS',
      });
    })
    .catch(() => {
      dispatch({
        type: 'AUTH_ERROR',
        payload: 'Error While Logout',
      });
    });
};

// REGISTER USER
export const register = (username, password, email) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username, email, password });

  axios
    .post('http://127.0.0.1:8000/api/auth/register', body, config)
    .then((res) => {
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data,
      });
    })
    .catch((err) => {
      if (!err.response) {
        // Network error (server offline or unreachable)
        dispatch({
          type: 'LOGIN_FAIL',
          payload: `Server is offline or unreachable. Please try again later.`,
        });
      }else{
        dispatch({
          type: 'REGISTER_FAIL',
          payload: 'Registration Failed. Try Again',
        });
      }
    });
};

export const dispatchError = (error) => (dispatch) => {
  dispatch({
    type: 'DISPATCH_ERROR',
    payload: error,
  });
};

export const clearError = () => (dispatch) => {
  dispatch({
    type: 'CLEAR_ERROR',
  });
};
