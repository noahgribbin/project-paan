  'use strict';

import React from 'react';
import { connect } from 'react-redux';

import store from '../store.js';

import { SignupForm } from '../components/signupForm.jsx';

import { signup } from '../actions/userActions.js';
import { createProfile } from '../actions/profileActions.js';

import { history } from '../entry.jsx';

class SignupFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
    this.errorCheck = this.errorCheck.bind(this);
     this.state = {
       username:'',
       password:'',
       usernameError:false,
       passwordError:false,
       signupError:false
     }
  }

  onInput(e){
    var type = e.target.getAttribute('name')
    this.setState({
      [type]: e.target.value
    })
  }

  errorCheck(){
    if(this.state.signupError){
    if(this.state.username===''){
      this.setState({usernameError:true})
    }else{
      this.setState({usernameError:false})
    }
    if(this.state.password===''){
        this.setState({passwordError:true})
      }else{
        this.setState({passwordError:false})
      }
    }
  }

  async onSubmit(e) {
    e.preventDefault();
    console.log('???',this.state);
    if(this.state.username===''||this.state.password===''){
      console.log('!!!');
      console.log(this.state)
      await this.setState({signupError:true})
      this.errorCheck()
      return
    }
      store.dispatch(signup(this.state.username, this.state.password))
      .then((user) => {
        store.dispatch(createProfile(user.value));
      })
      .then(() => {
        history.push('./landing');
      }
    );
  }

  render() {
        console.log('SignupFormContainer',this);
    return (
          <SignupForm
                       alreadyExists={this.props.alreadyExists}
                       onSubmit={this.onSubmit}
                       onInput={this.onInput}
                       errorCheck={this.errorCheck}
                       toggleForm={this.props.toggleForm}
                       passwordError={this.state.passwordError}
                       usernameError={this.state.usernameError}
                       username={this.state.username}
                       password={this.state.password}
           />
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state'+'\n',state);
  return {
    // add props if needed
    alreadyExists: state.userReducer.alreadyExists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // add props if needed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormContainer);
