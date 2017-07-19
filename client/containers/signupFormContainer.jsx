  'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import store from '../store.js';

import { SignupForm } from '../components/signupForm.jsx';

import { signup } from '../actions/userActions.js';

import {history} from '../entry.jsx';

class SignupFormContainer extends React.Component {
  constructor(props) {
    super(props);
    //  this.onSubmit = this.onSubmit.bind(this);
    //  this.onChange = this.onChange.bind(this);
     this.state = {
       username:'',
       password:''
     }
  }

  onUsernameInput(e) {
    this.setState({
      username: e.target.value
    })
  }

  onPasswordInput(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    console.log('submitted');
    e.preventDefault();
      store.dispatch(signup(this.state.username, this.state.password))
      .then(() => {
        history.push('./landing')
        console.log('this inside of onSubmit signupFormContainer',this);
      })
  }

  render() {
    return <SignupForm
              username={this.props.username}
              password={this.props.password}
              onSubmit={this.onSubmit}
              onUsernameInput={this.onUsernameInput}
              onPasswordInput={this.onPasswordInput}
           />
  }
}

const mapStateToProps = (state) => {
  console.log('state',state);
  return {
    username: state.username,
    password: state.password,
    token:    state.token,
    fetching: state.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => {
      dispatch(signup(this.props.username, this.props.password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormContainer)
