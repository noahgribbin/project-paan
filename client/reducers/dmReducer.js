'use strict';

const initialState = {
  campaignName: '',
  campaignCode: '',
  campaignMembers: '',
  sessionDm: '',
  duplicateError:false
};

export default function dmReducer(state=initialState, action) {
  switch(action.type) {
  case 'CREATE_DM_PENDING' :
    return Object.assign({}, state, {
    });
  case 'CREATE_DM_FULFILLED' :
    return Object.assign({}, state, {
      duplicateError: false
    });
  case 'CREATE_DM_REJECTED' :
    return Object.assign({}, state, {
      duplicateError: true
    });
  // GET DM
  case 'GET_DM_PENDING' :
    return Object.assign({}, state, {
    });
  case 'GET_DM_FULFILLED' :
    return Object.assign({}, state, {
      dm: action.payload
    });
  case 'GET_DM_REJECTED' :
    return Object.assign({}, state, {
    });

  case 'GET_ALL_DMS_PENDING' :
    return Object.assign({}, state, {
    });
  case 'GET_ALL_DMS_FULFILLED' :
    return Object.assign({}, state, {
      dms: action.payload
    });
  case 'GET_ALL_DMS_REJECTED' :
    return Object.assign({}, state, {
    });
  case 'GET_CAMPAIGN_MEMBERS_PENDING' :
    return Object.assign({}, state, {
    });
  case 'GET_CAMPAIGN_MEMBERS_FULFILLED' :
    return Object.assign({}, state, {

      campaign: action.payload
    });
  case 'GET_CAMPAIGN_MEMBERS_REJECTED' :
    return Object.assign({}, state, {
    });

  case 'UPDATE_DM_PENDING' :
    return Object.assign({}, state, {
    });
  case 'UPDATE_DM_FULFILLED' :
    return Object.assign({}, state, {
      campaign: action.payload
    });
  case 'UPDATE_DM_REJECTED' :
    return Object.assign({}, state, {
    });

  case 'DELETE_DM_PENDING' :
    return Object.assign({}, state, {
    });
  case 'DELETE_DM_FULFILLED' :
    return Object.assign({}, state, {
      dms: action.payload
    });
  case 'DELETE_DM_REJECTED' :
    return Object.assign({}, state, {
    });


  case 'SET_SESSION_DM' :
    return Object.assign({}, state, {
      sessionDm: action.sessionDm
    });

  case 'SET_CAMPAIGN_NAME' :
    return Object.assign({}, state, {
      campaignName: action.campaignName
    });

  default:
    return state;
  }
}
