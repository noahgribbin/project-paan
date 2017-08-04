'use strict';

const initialState = {
  username: '',
  dms: [],
  characters: [],
  fetching: false
};

export default function profileReducer(state=initialState, action) {
  switch(action.type) {
    // Create Profile
    case 'CREATE_PROFILE_PENDING' :
      console.log(action);
      return Object.assign({}, state, {
        fetching: true
      });
    case 'CREATE_PROFILE_FULFILLED' :
      console.log(action);
      console.log('action.payload'+'\n', action.payload);
      return Object.assign({}, state, {
        fetching: false
      });
    case 'CREATE_PROFILE_REJECTED' :
      console.log('action.error',+'\n', action);
      console.log('state'+'\n',state);
      return Object.assign({}, state, {
        fetching: false
      })
    // Get Profile
    case 'GET_PROFILE_PENDING' :
      console.log(action);
      return Object.assign({}, state, {
        fetching: true
      });
    case 'GET_PROFILE_FULFILLED' :
      console.log(action);
      console.log('action.payload'+'\n', action.payload);
      return Object.assign({}, state, {
        fetching: false
        // dms: action.payload.dm
        // what needs to be stored in state?
        // userID, _id?
        // profile?
      });
    case "GET_PROFILE_REJECTED" :
      console.log('action.error',+'\n', action);
      console.log('state'+'\n',state);
      return Object.assign({}, state, {
        fetching: false
      });
    // Default
    default:
      return state;
  }
}
