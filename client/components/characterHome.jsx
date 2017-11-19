'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class CharacterHome extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.props.onClick.bind(this);
  }

  render() {
    return (
      <section>
        <div className="character-home-container" onClick={this.onClick}>
          <div className="home-banner">
          </div>
          <p className="home-banner-text">Player</p>
          <div className="sub-banner">
          </div>
          <p className="sub-banner-text">Play your PC</p>
        </div>
      </section>
    )
  }
}

CharacterHome.propTypes = {
  onClick: React.PropTypes.func
}
