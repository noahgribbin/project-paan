'use strict';

const initialState = {
  username: '',
  dms: [],
  characters: [],
  fetching: false,
  profileID: ''
};

export default function profileReducer(state=initialState, action) {
  switch(action.type) {
    // Create Profile
  case 'CREATE_PROFILE_PENDING' :
    return Object.assign({}, state, {
      fetching: true
    });
  case 'CREATE_PROFILE_FULFILLED' :
    return Object.assign({}, state, {
      fetching: false,
      profileID: action.payload._id
    });
  case 'CREATE_PROFILE_REJECTED' :
    return Object.assign({}, state, {
      fetching: false
    });
  // Get Profile
  case 'GET_PROFILE_PENDING' :
    return Object.assign({}, state, {
      fetching: true
    });
  case 'GET_PROFILE_FULFILLED' :
    return Object.assign({}, state, {
      fetching: false,
      profileID: action.payload._id,
      profile: action.payload
    });
  case 'GET_PROFILE_REJECTED' :
    return Object.assign({}, state, {
      fetching: false
    });
  // Default
  default:
    return state;
  }
}
