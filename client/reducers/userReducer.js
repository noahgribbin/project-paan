'use strict';

const initialState = {
  username: '',
  password: '',
  token: null,
  alreadyExists: false,
  signInError: '',
  fetching: false
};

export default function userReducer(state=initialState, action) {
  switch(action.type) {
    // Signup
  case 'SIGNUP_PENDING' :
    return Object.assign({}, state, {
      alreadyExists: false,
      fetching: true
    });
  case 'SIGNUP_FULFILLED' :
    return Object.assign({}, state, {
      fetching: false,
      token: action.payload.token,
      username: action.payload.user.username,
      alreadyExists: false

    });
  case 'SIGNUP_REJECTED' :
    if (action.error) {
      return Object.assign({}, state, {
        alreadyExists: true,
        fetching: false
      });
    }
    break;
    // Login
  case 'LOGIN_PENDING' :
    return Object.assign({}, state , {
      fetching: true,
      signInError: ''
    });
  case 'LOGIN_FULFILLED' :
    return Object.assign({}, state,  {
      fetching: false,
      token: action.payload.token,
      username: action.payload.user.username,
      signInError: ''
    });
  case 'LOGIN_REJECTED' :
    if (action.payload.status == 404)  {
      return Object.assign({}, state, {
        signInError: action.payload.response.text,
        fetching: false
      });
    }else if (action.payload.status == 401) {
      return Object.assign({}, state, {
        signInError: 'badRequest',
        fetching: false
      });
    }
    break;
    // Logout
  case 'LOGOUT' :
    return initialState;
  case 'LOGIN_USERNAME_FULFILLED':
    return Object.assign({}, state, {
      username: action.payload
    });
  case 'LOGIN_USERNAME_REJECTED' :
    return state;
    // Default
  default:
    return state;
  }
}
