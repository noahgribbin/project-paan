'use strict';

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import store from '../store.js';
import { history } from '../entry.jsx';

export class DeleteWeaponButton extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.props.onClick.bind(this)
  }

  render() {
    return (
      <div className="delete-weapon-button"
           onClick={this.onClick}
           id={this.props.weapon._id}>
      </div>
    )
  }
}