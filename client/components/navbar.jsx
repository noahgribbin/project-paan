'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import ReactSvg from 'react-svg'

export class Navbar extends React.Component {
  constructor(props) {
    super()
    this.toggleHamburger = this.toggleHamburger.bind(this);
    this.state={
      hamburgerToggle: false
    }
  }

  toggleHamburger(){
    this.setState(prevState=>({
      hamburgerToggle:!prevState.hamburgerToggle
    }));
    console.log(this.state.hamburgerToggle);
  }

  render(){
    return(
      <nav className={"navbar " + (this.state.hamburgerToggle ? " hamburger-nav " :null)}>
          <div className="navbar-brand">
            <a className="navbar-logo">

            <ReactSvg
              path="client/assets/d20.svg"
              className="navbar-svg"
              evalScript="always"
            />
          </a>
            <a className="navbar-title">Dungeon Manager</a>
          </div>
        <button>
          <div className="hamburger-holder"
               onClick={this.toggleHamburger}>
            <ReactSvg
              path="client/assets/hamburger.svg"
              className="navbar-svg"
              evalScript="always"
            />
          </div>
        </button>
        {this.state.hamburgerToggle ?
          <div className="hamburger-dropdown-div">
            <button>Dungeon Manager</button>
            <button>Player</button>
          </div>
        :null}
      </nav>
    )
  }
}
