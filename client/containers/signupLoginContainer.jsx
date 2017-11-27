'use strict'

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import store from '../store.js';

import SignupFormContainer from '../containers/signupFormContainer.jsx';
import LoginFormContainer from '../containers/loginFormContainer.jsx';
class SignupLoginContainer extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.state={
      showLogin:false,
      showSignup:false
    }
  }

  componentDidMount(){
    console.log('componentDidMount')
    console.log('this', this)
    if(this.props.token){
      this.setState({showLogin:true})
    }else{
      this.setState({showSignup:true})
    }
  }

  toggleForm(){
    this.setState(prevState => ({
      showLogin:!prevState.showLogin,
      showSignup:!prevState.showSignup
    }))
  }

  render() {
    return (
      <section>
        {this.state.showSignup ?
          <SignupFormContainer
            toggleForm={this.toggleForm}
          />
        :null}
        {this.state.showLogin ?
          <LoginFormContainer
            toggleForm={this.toggleForm}
          />

        :null}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state',state);
  return {
    token: state.userReducer.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // add props if needed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupLoginContainer);
