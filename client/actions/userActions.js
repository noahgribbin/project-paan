'use strict';

var request = require('superagent');

function signup(username, password) {
  return {
    type: 'SIGNUP',
    payload: request
    .post(`${'http://localhost:8000'}/api/signup`)
    .send({username, password})
    .then( res => {
      var response = JSON.parse(res.text);
      return response;
    })
  };
}

function login(username, password) {
  return {
    type: 'LOGIN',
    payload: request
    .get(`${'http://localhost:8000'}/api/signin`)
    .auth(`${username}:${password}`)
    .then( res => {
      var response = JSON.parse(res.text);
      return response;
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
