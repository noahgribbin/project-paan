'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.props.onSubmit.bind(this);
    this.onUsernameInput = this.props.onUsernameInput.bind(this);
    this.onPasswordInput = this.props.onPasswordInput.bind(this);
  }

  render() {
    return (
      <section>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <input onChange={this.onUsernameInput} type="text" name="username" placeholder="username"></input>
          </div>
          <div>
            <input onChange={this.onPasswordInput} type="text" name="password" placeholder="password"></input>
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    )
  }
}

LoginForm.propTypes = {
  onSubmit:         React.PropTypes.func,
  onUsernameInput:  React.PropTypes.func,
  onPasswordInput:  React.PropTypes.func
}
