'use strict';

// import { request } from 'superagent';
var request = require('superagent');

export function createProfile(user) {
  console.log('user', user);
  return {
    type: 'CREATE_PROFILE',
    payload: request
    .post(`${'http://localhost:8000'}/api/profile`)
    .set({authorization: `Bearer ${user.token}`})
    .send(user.user)
    .then( res => {
      var response = JSON.parse(res.text)
      return response;
    })
  };
}

export function getProfile(data) {
  console.log('getProgfile user', data);
  return {
    type: 'GET_PROFILE',
    payload: request
    .get(`${'http://localhost:8000'}/api/profile/${data.user._id}`)
    .set({authorization: `Bearer ${data.token}`})
    .then( res => {
      var response = JSON.parse(res.text)
      return response;
    })
  }
}
