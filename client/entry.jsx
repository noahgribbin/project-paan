import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import createHistory from 'history/createBrowserHistory'

import store from './store.js';
import index from './index.html';

import {signup, login, logout} from './actions/userActions.js';


import SignupLoginContainer from './containers/signupLoginContainer.jsx';
import Landing from './containers/landing.jsx';
import DmPage from './containers/dmPage.jsx';
import PlayerPage from './containers/playerPage.jsx';
import CharacterPage from './containers/characterPage.jsx';
import CampaignPage from './containers/campaignPage.jsx';
import {Home} from './containers/home.jsx';
import SessionPage from './containers/sessionPage.jsx';

import './scss/main.scss';

function checkState() {
  console.log('checkState'+'\n', store.getState());
}

export const history = createHistory()

render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path='/' component={SignupLoginContainer}/>
        <Route path='/landing' component={Home}/>
        <Route path='/dm' component={DmPage}/>
        <Route path='/player' component={PlayerPage}/>
        <Route path='/character' component={CharacterPage}/>
        <Route path='/dmParty' component={CampaignPage}/>
        <Route path='/session' component={SessionPage}/>

      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)
