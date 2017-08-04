'use srict';

import React from 'react';
import { connect } from 'react-redux';

import store from '../store.js';

import { LoginForm } from '../components/loginForm.jsx';

import { login } from '../actions/userActions.js';
import { getProfile } from '../actions/profileActions.js';

import { history } from '../entry.jsx';

class LoginFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onUsernameInput = this.onUsernameInput.bind(this)
    this.onPasswordInput = this.onPasswordInput.bind(this)
    this.state = {
      username:'',
      password:''
    }
  }

  onUsernameInput(e) {
    this.setState({
      username: e.target.value
    });
  }

  onPasswordInput(e) {
    console.log(this.state);
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    store.dispatch(login(this.state.username, this.state.password))
    .then((user) => {
      store.dispatch(getProfile(user.value))
    })
    .then(() => {
      history.push('./landing');
    }, err => console.error('ERROR',err));
  }

  render() {
    return (
      <LoginForm
                 signInError={this.props.signInError}
                 onSubmit={this.onSubmit}
                 onUsernameInput={this.onUsernameInput}
                 onPasswordInput={this.onPasswordInput}
      />
    )
  }
}

  const mapStateToProps = (state) => {
    console.log('state',state);
    return {
      signInError: state.signInError
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      // add props if needed
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
