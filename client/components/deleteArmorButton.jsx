'use strict';

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import store from '../store.js';

export class DeleteArmorButton extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.props.onClick.bind(this)
  }

  render() {
    return (
      <span className="delete-weapon-button right fa fa-minus-square-o"
           onClick={this.onClick}
           id={this.props.armor._id}>
      </span>
    )
  }
}
