'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    console.log(this);
    this.onSubmit = this.props.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submitAndCheck = this.submitAndCheck.bind(this);
    this.errorCheck = this.props.errorCheck.bind(this);
    this.state={
      showErrors: false
    }
  }
  async onChange(e){
    await  this.props.onInput(e)
    this.props.errorCheck()
  }
  async submitAndCheck(e){
    e.preventDefault()
    this.setState({showErrors:true})
    await this.errorCheck()

    this.onSubmit(e)
  }

  render() {
    return (
      <section className="login-section">
        <h1 className="login-title">Dungeon Manager</h1>
        <form className="login-form" onSubmit={this.submitAndCheck}>
          <div>
            <input onChange={this.onChange}
                   className={"login-input " + (this.props.usernameError && this.state.showErrors ?  'input-error' : null )}
                   type="text" name="username"
                   placeholder="username"></input>
            {this.props.signInError === "NotFoundError" && this.state.showErrors && this.props.username!==''? <div><p className="input-error-message">Username not found</p></div> : null}
            {this.state.showErrors && this.props.username===''? <div><p className="input-error-message">Username required</p></div> : null}
          </div>
          <div>
            <input onChange={this.onChange}
                   className={"login-input " +  (this.props.passwordError && this.state.showErrors ? 'input-error' : null )}
                   type="password"
                   name="password"
                   placeholder="password"></input>
            {this.props.signInError === "badRequest" && this.state.showErrors && this.props.password!=='' && this.props.username!=='' ? <div><p className="input-error-message">Invalid Password</p></div> : null}
            {this.state.showErrors && this.props.password===''? <div><p className="input-error-message">Password required</p></div> : null}
          </div>
          <button className="login-button" type="submit" >log in</button>
        </form>
        <div className="redirect-container">
          <p className="redirect-message" onClick={this.props.toggleForm}>dont have an account?</p>
          <p className="redirect-message" onClick={this.props.toggleForm}>signup</p>
        </div>

      </section>
    )
  }
}

LoginForm.propTypes = {
  onSubmit:         React.PropTypes.func,
  onUsernameInput:  React.PropTypes.func,
  onPasswordInput:  React.PropTypes.func
}
