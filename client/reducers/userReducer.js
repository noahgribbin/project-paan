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
    console.log(action);
    console.log('action.payload'+'\n',action.payload);
    return Object.assign({}, state, {
      fetching: true
    });
  case 'SIGNUP_FULFILLED' :
    console.log(action);
    console.log('action.payload'+'\n',action.payload);
    return Object.assign({}, state, {
      fetching: false,
      token: action.payload.text

    });
  case 'SIGNUP_REJECTED' :
    console.log(action);
    return state;
    // Login
  case 'LOGIN_PENDING' :
    console.log(action);
    return Object.assign({}, state , {
      fetching: true
    });
  case 'LOGIN_FULFILLED' :
    console.log('action.payload'+'\n',action.payload);
    return Object.assign({}, state,  {
      fetching: false,
      token: action.payload.token
    });
  case 'LOGIN_REJECTED' :
    console.log(action);
    return state;
    // Logout
  case 'LOGOUT' :
    console.log(action);
    return initialState;
    // Default
  default:
    return state;
  }
}
