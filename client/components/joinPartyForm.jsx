'use strict';

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

export class JoinPartyForm extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.props.onSubmit.bind(this)
    this.onChange = this.props.onChange.bind(this)
    this.toggleCharacterManagment = this.props.toggleCharacterManagment.bind(this)
    this.onJoinPartySubmit = this.props.onJoinPartySubmit.bind(this)
  }

  render() {
    return (
      <section className="join-party-form-container">
        <h1 className="join-party-title">Join Party Form</h1>
        <form className="join-party-form" onSubmit={this.onSubmit}>
          <input onChange={this.onChange}
                 placeholder="party code"
                 className="join-party-form-input"></input>
        </form>
    </section>
    )
  }
}
