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
      <span className="toggle-weapon-update-form-button right fa fa-pencil-square-o"
           onClick={this.props.toggleShow}
           id={this.props.weaponId}>

      </span>
    )
  }
}
