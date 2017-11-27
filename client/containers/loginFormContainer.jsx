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
    console.log(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this)
    this.errorCheck = this.errorCheck.bind(this)
    this.state = {
      username:'',
      password:'',
      usernameError:false,
      passwordError:false,
      loginError:false
    }
  }

  onInput(e){
    console.log('onInput');
    console.log(this.state);
    var type = e.target.getAttribute('name')
    console.log(type);
    this.setState({
      [type]: e.target.value
    })
  }

  async errorCheck(){
     if(this.state.username===''||this.state.password===''){
      await this.setState({loginError:true})
      console.log('errorCheck loginError');
      console.log(this.state);
    }else {
      this.setState({loginError:false})
      console.log('has value');
    }

    // if(this.state.loginError){
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
    // }
  }

 onSubmit(e) {
    e.preventDefault();
    if(e)console.log('BEGINGING OF ONSUBMIT',this.state);
    if(e)console.log('BEGINGING OF ONSUBMIT',this.props);
    if (this.state.loginError===true) return
    console.log('past catch');
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
      <section>
        <LoginForm
                   signInError={this.props.signInError}
                   onSubmit={this.onSubmit}
                   toggleForm={this.props.toggleForm}
                   onInput={this.onInput}
                   errorCheck={this.errorCheck}
                   loginError={this.state.loginError}
                   passwordError={this.state.passwordError}
                   usernameError={this.state.usernameError}
                   username = {this.state.username}
                   password = {this.state.password}
        />
      </section>
    )
  }
}

  const mapStateToProps = (state) => {
    console.log('state',state);
    return {
      signInError: state.userReducer.signInError
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      // add props if needed
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
