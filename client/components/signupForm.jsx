'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    console.log('this',this);
    this.onSubmit= this.props.onSubmit.bind(this);
    this.onUsernameInput= this.props.onUsernameInput.bind(this);
    this.onPasswordInput= this.props.onPasswordInput.bind(this);

  }

  render() {
    return  (
      <section className="signup">
        <h1>Signup</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <input onChange={this.onUsernameInput} type="text" name="username"  placeholder='username'></input>
          </div>
          <div>
            <input onChange={this.onPasswordInput} type="text" name="password" placeholder="password"></input>
          </div>
          <button type="submit">Create Account</button>
        </form>
      </section>
        )
    }
};
SignupForm.propTypes = {
  username:       React.PropTypes.string,
  password:       React.PropTypes.string,
  onSubmit:       React.PropTypes.func,
  onChange:       React.PropTypes.func,
  value:          React.PropTypes.object
};
