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
      fetching: true
    });
  case 'SIGNUP_FULFILLED' :
  console.log('action.payload'+'\n',action.payload);
    return Object.assign({}, state, {
      fetching: false,
      token: action.payload.token,
      username: action.payload.user.username

    });
  case 'SIGNUP_REJECTED' :
    if (action.error) {
      return Object.assign({}, state, {
        alreadyExists: true,
        fetching: false
      })
    }
    // Login
  case 'LOGIN_PENDING' :
    return Object.assign({}, state , {
      fetching: true
    });
  case 'LOGIN_FULFILLED' :
    console.log('action.payload'+'\n',action.payload);
    return Object.assign({}, state,  {
      fetching: false,
      token: action.payload.token,
      username: action.payload.user.username
    });
  case 'LOGIN_REJECTED' :
    console.log(action);
    if (action.payload.status == 404)  {
      return Object.assign({}, state, {
        signInError: action.payload.response.text,
        fetching: false
      })
    }else if (action.payload.status == 401) {
      return Object.assign({}, state, {
        signInError: 'badRequest',
        fetching: false
      })
    }
    // Logout
  case 'LOGOUT' :
    console.log(action);
    return initialState;
  //  usernameChange
  case 'LOGIN_USERNAME_FULFILLED':
    console.log(action);
    console.log('action.payload'+'\n',action.payload);
    return Object.assign({}, state, {
      username: action.payload
    });
  case 'LOGIN_USERNAME_REJECTED' :
    console.log(action);
    return state;
    // Default
  default:
    return state;
  }
}
