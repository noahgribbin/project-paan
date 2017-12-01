'use strict';

// import { request } from 'superagent';
var request = require('superagent');

export function createProfile(data) {
  return {
    type: 'CREATE_PROFILE',
    payload: request
    .post(`${'http://localhost:8000'}/api/profile`)
    .set({authorization: `Bearer ${data.token}`})
    .send(data.user)
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
