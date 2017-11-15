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
          Player
        </div>
      </section>
    )
  }
}

CharacterHome.propTypes = {
  onClick: React.PropTypes.func
}
