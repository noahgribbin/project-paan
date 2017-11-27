'use strict';

const initialState = {
  campaignName: '',
  campaignCode: '',
  campaignMembers: '',
  sessionDm: '',
  duplicateError:false
}

export default function dmReducer(state=initialState, action) {
  switch(action.type) {
    // C
    case 'CREATE_DM_PENDING' :
      console.log(action);
      return Object.assign({}, state, {
      // update
    });
    case 'CREATE_DM_FULFILLED' :
      console.log(action);
      return Object.assign({}, state, {
        // campaignName: action.payload.dm.campaignName,
        duplicateError: false
        // campaignCode: action.payload.dm.campaignCode,
        // campaignMembers: action.payload.dm.campaignMembers
    });
    case 'CREATE_DM_REJECTED' :
      console.log(action);
      return Object.assign({}, state, {
      duplicateError: true
    })
    // GET DM
    case 'GET_DM_PENDING' :
      console.log(action);
      return Object.assign({}, state, {
      // update state
    });
    case 'GET_DM_FULFILLED' :
      console.log(action);
      return Object.assign({}, state, {
        dm: action.payload
    });
    case 'GET_DM_REJECTED' :
      console.log(action);
      return Object.assign({}, state, {
      // update state
    })

    case 'GET_ALL_DMS_PENDING' :
      console.log(action);
      return Object.assign({}, state, {
      // update state
    });
    case 'GET_ALL_DMS_FULFILLED' :
      console.log(action);
      console.log(action.payload);
      return Object.assign({}, state, {
        dms: action.payload,
        // campaignCode: action.payload.dm.campaignCode,
        // campaignMembers: action.payload.dm.campaignMembers
    });
    case 'GET_ALL_DMS_REJECTED' :
      console.log(action);
      return Object.assign({}, state, {
      // update state
    })
    case 'GET_CAMPAIGN_MEMBERS_PENDING' :
      console.log(action);
      return Object.assign({}, state, {
      // update state
    });
    case 'GET_CAMPAIGN_MEMBERS_FULFILLED' :
      console.log(action);
      console.log(action.payload);
      return Object.assign({}, state, {

        campaign: action.payload
    });
    case 'GET_CAMPAIGN_MEMBERS_REJECTED' :
      console.log(action);
      return Object.assign({}, state, {
      // update state
    })

    case 'UPDATE_DM_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'UPDATE_DM_FULFILLED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
      campaign: action.payload
    })
    case 'UPDATE_DM_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })

    case 'DELETE_DM_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'DELETE_DM_FULFILLED' :
    console.log(action);
    return Object.assign({}, state, {
        dms: action.payload
    })
    case 'DELETE_DM_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })


    case 'SET_SESSION_DM' :
    console.log(action);
      return Object.assign({}, state, {
        sessionDm: action.sessionDm
    });

    case 'SET_CAMPAIGN_NAME' :
    console.log(action);
      return Object.assign({}, state, {
        campaignName: action.campaignName
        // TODO: fix so rewrites campaign.campaignName
    });

    default:
      return state;
  }
}
