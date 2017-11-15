'use strict';

import { combineReducers } from 'redux';

import userReducer from './userReducer.js'
import profileReducer from './profileReducer.js'
import dmReducer from './dmReducer.js'
import characterReducer from './characterReducer.js'

const reducer = combineReducers({
  userReducer,
  profileReducer,
  dmReducer,
  characterReducer
});

export default reducer;
