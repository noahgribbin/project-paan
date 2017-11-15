'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class DmHome extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.onClick = this.props.onClick.bind(this);
  }

  render() {
    return (
      <section>
        <div className="dm-home-container" onClick={this.onClick}>
          Dungeon Master
        </div>
      </section>
    )
  }
}

DmHome.propTypes = {
  dmOnSubmit: React.PropTypes.func
}
