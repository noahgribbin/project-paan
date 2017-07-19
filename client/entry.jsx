import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import createHistory from 'history/createBrowserHistory'

import store from './store.js';

import {signup, login, logout} from './actions/userActions.js';

import SignupFormContainer from './containers/signupFormContainer.jsx';
import { Home } from './containers/home.jsx';


function checkState() {
  console.log('checkState'+'\n', store.getState());
}

export const history = createHistory()

render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path='/' component={SignupFormContainer}/>
        <Route path='/landing' component={Home}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)
