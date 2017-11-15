'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class ToggleWeaponUpdateFormButton extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="toggle-weapon-update-form-button"
           onClick={this.props.toggleShow}
           id={this.props.weaponId}>

      </div>
    )
  }
}
