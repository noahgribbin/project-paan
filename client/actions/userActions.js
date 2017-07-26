'use strict';

var request = require('superagent');

function signup(username, password) {
  return {
    type: 'SIGNUP',
    payload: request
    .post(`${'http://localhost:8000'}/api/signup`)
    .send({username, password})
    // .then( res => {
    //   console.log('res', res);
    //   return res;
    // })
    // .catch( err => {
    //   console.log('err', err);
    //   return err;
    // })
  };
}

function login(username, password) {
  return {
    type: 'LOGIN',
    payload: request
    .get(`${'http://localhost:8000'}/api/signin`)
    .auth(`${username}:${password}`)
    .then( res => {
      // console.log('res', res);
      var response = JSON.parse(res.text);
      return response;
      console.log('bottom of then');
    })
  };
}

function logout() {
  return {
    type: 'LOGOUT'
  };
}

//

function loginUsername(username) {
  return {
    type: 'LOGIN_USERNAME',
    payload: username
  }
}

export { signup, login, logout};
