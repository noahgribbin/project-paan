'use strict';

var request = require('superagent');

export function createDm(data) {
  return {
    type: 'CREATE_DM',
    payload: request
    .post(`${'https://dungeon-manager-be.herokuapp.com'}/api/dm`)
    .set({authorization: `Bearer ${data.token}`})
    .send(data.dm)
    .then( res => {
      var response = JSON.parse(res.text);
      return response;
    })
  };
}

export function getDm(data) {
  return {
    type: 'GET_DM',
    payload: request
    .get(`${'https://dungeon-manager-be.herokuapp.com'}/api/dm/${data.id}`)
    .set({ authorization: `Bearer ${data.token}`})
    .then( res => {
      return res.body;
    })
  };
}

export function getAllDms(data) {
  return {
    type: 'GET_ALL_DMS',
    payload: request
    .get(`${'https://dungeon-manager-be.herokuapp.com'}/api/dms/${data.id}`)
    .set({ authorization: `Bearer ${data.token}`})
    .then( res => {
      return res.body.dms;
    })
  };
}

export function setSessionDm(data) {
  return {
    type: 'SET_SESSION_DM',
    sessionDm: data
  };
}

export function setCampaignName(data) {
  return {
    type: 'SET_CAMPAIGN_NAME',
    campaignName: data
  };
}

export function getCampaignMembers(data) {
  return {
    type: 'GET_CAMPAIGN_MEMBERS',
    payload: request
    .get(`${'https://dungeon-manager-be.herokuapp.com'}/api/dm/party/${data.id}`)
    .set({ authorization: `Bearer ${data.token}`})
    .then( res => {
      return res.body;
    })
  };
}

export function updateDm(data) {
  return {
    type: 'UPDATE_DM',
    payload: request
    .put(`${'https://dungeon-manager-be.herokuapp.com'}/api/dm/${data.id}`)
    .set({ authorization: `Bearer ${data.token}`})
    .send(data.body)
    .then( res => {
      return res.body;
    })
  };
}
export function deleteDm(data) {
  return {
    type: 'DELETE_DM',
    payload: request
    .delete(`${'https://dungeon-manager-be.herokuapp.com'}/api/dm/${data.id}`)
    .set({ authorization: `Bearer ${data.token}`})
    .then( res => {
      return res.body;
    })
  };
}
