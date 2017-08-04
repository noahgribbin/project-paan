'use strict';

import { combineReducers } from 'redux';

import userReducer from './userReducer.js'
import profileReducer from './profileReducer.js'

export default combineReducers({
  userReducer,
  profileReducer
});
