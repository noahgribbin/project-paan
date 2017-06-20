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
  case 'SIGNUP_PENDING' :
    console.log(action);
    return state;
  case 'SIGNUP_FULFILLED' :
    console.log(action);
    return state;
  case 'SIGNUP_REJECTED' :
    console.log(action);
    return state;
  default:
    return state;
  }
}
