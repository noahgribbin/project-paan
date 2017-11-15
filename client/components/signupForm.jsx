'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.props.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submitAndCheck = this.submitAndCheck.bind(this);
    this.errorCheck = this.props.errorCheck.bind(this);
    this.onInput = this.props.onInput.bind(this);
    this.state={
      showErrors: false
    }
  }

    async onChange(e){
      this.setState({showErrors:false})
      await  this.onInput(e)
      this.errorCheck()
    }

    submitAndCheck(e){
      this.setState({showErrors:true})
      this.errorCheck()
      this.onSubmit(e)
    }

  render() {
    return  (
      <section className="login-section">
        <h1 className="login-title">Start Playing Today</h1>
        <form className="loginForm" onSubmit={this.submitAndCheck} autoComplete="off">
          <div>
            <input onChange={this.onChange}
                  type="text"
                  name="username"
                  placeholder="username"
                  // pattern=".{3,}"
                  className={"login-input " + (this.props.usernameError === true ?  'input-error' : null )}
                  ></input>
            {this.props.alreadyExists && this.state.showErrors && this.props.username!=='' ? <div><p className="input-error-message">Username taken</p></div>: null}
            {this.props.username==='' && this.state.showErrors ? <div><p className="input-error-message">Please enter username</p></div>: null}
          </div>
          <div>
            <input onChange={this.onChange}
                   type="password"
                   name="password"
                   placeholder="password"
                   className={"login-input " + (this.props.passwordError === true ?  'input-error' : null )}></input>
                   {this.props.password==='' && this.state.showErrors ? <div><p className="input-error-message">Please enter password</p></div>: null}
          </div>
          <button className="login-button" type="submit">Sign up</button>
        </form>
        <div className="redirect-container">
          <p className="redirect-message" onClick={this.props.toggleForm}>already have an account?</p>
          <p className="redirect-message" onClick={this.props.toggleForm}>login</p>
        </div>
      </section>
        )
    }
};

SignupForm.propTypes = {
  onSubmit:         React.PropTypes.func,
  onInput:  React.PropTypes.func
};
