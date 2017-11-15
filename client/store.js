'use strict';

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {persistStore, autoRehydrate} from 'redux-persist'
import reducer from './reducers';


const middleware = applyMiddleware(promise(), thunk);


const dmReducer = localStorage.getItem('reduxPersist:dmReducer') ? JSON.parse(localStorage.getItem('reduxPersist:dmReducer')) : {}
const characterReducer = localStorage.getItem('reduxPersist:characterReducer') ? JSON.parse(localStorage.getItem('reduxPersist:characterReducer')) : {}
const profileReducer = localStorage.getItem('reduxPersist:profileReducer') ? JSON.parse(localStorage.getItem('reduxPersist:profileReducer')) : {}
const userReducer = localStorage.getItem('reduxPersist:userReducer') ? JSON.parse(localStorage.getItem('reduxPersist:userReducer')) : {}
//

const persistedState = {dmReducer, characterReducer, profileReducer, userReducer}

const store =  createStore(reducer, persistedState, compose( middleware, autoRehydrate()));
// console.log(dmState);
// console.log(store);



persistStore(store)
// persistStore(store).purge()

export default store
