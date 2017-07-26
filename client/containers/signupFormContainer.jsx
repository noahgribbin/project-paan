  'use strict';

import React from 'react';
import { connect } from 'react-redux';

import store from '../store.js';

import { SignupForm } from '../components/signupForm.jsx';

import { signup } from '../actions/userActions.js';

import { history } from '../entry.jsx';

class SignupFormContainer extends React.Component {
  constructor(props) {
    super(props);

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
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    console.log('submitted');
    e.preventDefault();
      store.dispatch(signup(this.state.username, this.state.password))
      .then(() => {
        history.push('./landing');
      }, err => console.error('ERROR', err)
    );
  }

  render() {
    return (
          <SignupForm  onSubmit={this.onSubmit}
                       onUsernameInput={this.onUsernameInput}
                       onPasswordInput={this.onPasswordInput}
           />
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state'+'\n',state);
  return {
    // add props if needed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // add props if needed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormContainer);
