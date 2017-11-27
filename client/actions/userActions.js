'use strict';

var request = require('superagent');

function signup(username, password) {
  return {
    type: 'SIGNUP',
    payload: request
    .post(`${'https://dungeon-manager-be.herokuapp.com'}/api/signup`)
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
    .get(`${'https://dungeon-manager-be.herokuapp.com'}/api/signin`)
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

export { signup, login, logout};
