'use strict';

import {signupForm} from '../components/signupForm.jsx';

export default class SignupFormContainer () => {
  return <signupForm />;
}

const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password,
    token:    state.token,
    fetching: state.fetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: () => {
      dispatch(signup(username, password))
    }
  }
}
