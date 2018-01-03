'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import ReactSvg from 'react-svg';
import Transition from 'react-transition-group/Transition'

import store from '../store.js';
import { history } from '../entry.jsx';
import { getAllDms } from '../actions/dmActions.js';
import { getAllCharacters } from '../actions/characterActions.js';
import { logout } from '../actions/userActions.js';

import D20 from '../assets/d20.svg';
import Hamburger from '../assets/hamburger.svg';
console.log(D20);

const Fade = ({ in: inProp, show, toCharacter, toDm, logout }) => (
  <Transition in={inProp}
    timeout={0}
    appear>
    {(state) => (
      <div className={`hamburger-dropdown-div dropdown-${state}`}>
        <button onClick={toDm}>Dungeon Master</button>
        <button onClick={toCharacter}>Player</button>
        <button onClick={logout}>Logout</button>
      </div>
    )}
  </Transition>
);

export class Navbar extends React.Component {
  constructor(props) {
    super()
    this.toggleHamburger = this.toggleHamburger.bind(this);
    this.homeOnClick = this.homeOnClick.bind(this);
    this.dmOnClick = this.dmOnClick.bind(this);
    this.characterOnClick = this.characterOnClick.bind(this);
    this.logoutOnClick = this.logoutOnClick.bind(this);
    this.state={
      hamburgerToggle: false
    }
  }

  toggleHamburger(){
    this.setState(prevState=>({
      hamburgerToggle:!prevState.hamburgerToggle
    }));
  }

  dmOnClick() {
    const data = {
      id: store.getState().profileReducer.profileID,
      token: store.getState().userReducer.token
    }
    store.dispatch(getAllDms(data))
    .then(() => {
      history.push('./dm')
    })
  }

  characterOnClick() {
    const data = {
      id: store.getState().profileReducer.profileID,
      token: store.getState().userReducer.token
    }
    store.dispatch(getAllCharacters(data))
    .then(() => {
      history.push('./player')
    })
  }

  homeOnClick(){
    history.push('./landing')
  }

  logoutOnClick(){
    store.dispatch(logout())
      history.push('./')
  }

  render(){

    return(
      <nav className={"navbar " + (this.state.hamburgerToggle ? " hamburger-nav " :null) + (this.props.noBackground ? ' no-background ' :null)}>
          <div className="navbar-brand"
               onClick={this.homeOnClick}>
            <a className="navbar-logo">

              <D20 />

          </a>
            <a className="navbar-title">Dungeon Manager</a>
          </div>
        <button>
          <div className={"hamburger-holder " + (this.state.hamburgerToggle ? ' flip-burger ' :null) + (!this.state.hamburgerToggle ? ' revert-flip-burger ' :null) }
               onClick={this.toggleHamburger}>

           <Hamburger />
            {/* <ReactSvg
              path="client/assets/hamburger.svg"
              className="navbar-svg "
              evalScript="always"
            /> */}
          </div>
        </button>
          <Fade in={this.state.hamburgerToggle} show={this.state.hamburgerToggle} toDm={this.dmOnClick} toCharacter={this.characterOnClick} logout={this.logoutOnClick}/>
      </nav>
    )
  }
}
