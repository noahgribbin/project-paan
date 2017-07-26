'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit= this.props.onSubmit.bind(this);
    this.onUsernameInput= this.props.onUsernameInput.bind(this);
    this.onPasswordInput= this.props.onPasswordInput.bind(this);
  }

  render() {
    return  (
      <section className="signup">
        <h1>Start Playing Today</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <input onChange={this.onUsernameInput} type="text" name="username"  placeholder='username'></input>
          </div>
          <div>
            <input onChange={this.onPasswordInput} type="password" name="password" placeholder="password"></input>
          </div>
          <button type="submit">Sign up</button>
        </form>
      </section>
        )
    }
};

SignupForm.propTypes = {
  onSubmit:         React.PropTypes.func,
  onUsernameInput:  React.PropTypes.func,
  onPasswordInput:  React.PropTypes.func
};
