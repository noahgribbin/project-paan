'use strict';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer.js';

const middleware = applyMiddleware(promise(), thunk);


export default createStore(userReducer, middleware);

// console.log('user reducer'+'\n', userReducer);
// console.log('middleware'+'\n', middleware);
// console.log('createStore'+'\n',createStore(userReducer, middleware));
