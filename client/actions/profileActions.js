'use strict';

// import { request } from 'superagent';
var request = require('superagent');

export function createProfile(data) {
  return {
    type: 'CREATE_PROFILE',
    payload: request
    .post(`${'https://dungeon-manager-be.herokuapp.com'}/api/profile`)
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
    .get(`${'https://dungeon-manager-be.herokuapp.com'}/api/profile/${data.user._id}`)
    .set({authorization: `Bearer ${data.token}`})
    .then( res => {
      var response = JSON.parse(res.text)
      return response;
    })
  }
}
