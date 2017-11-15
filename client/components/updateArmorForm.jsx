'use strict';

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import store from '../store.js';


export class UpdateArmorForm extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    this.onChange = this.props.onChange.bind(this)
    this.onSubmit = this.props.onSubmit.bind(this)
    this.toggleHide = this.props.toggleHide.bind(this)

    this.stopPropagation = this.stopPropagation.bind(this)
    this.updateAndToggle = this.updateAndToggle.bind(this)
    this.onEscapeKey = this.onEscapeKey.bind(this)
    this.deepOnEscapeKey = this.deepOnEscapeKey.bind(this)
    this.updateArmorInput = this.updateArmorInput.bind(this)
    this.resetState = this.resetState.bind(this)
    this.errorCheck = this.errorCheck.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.state = {
      armorName: '',
      armorNameError: '',
      updateArmorError: false,
      showErrors: false
    }
  }

  componentDidMount(){
    document.getElementById("updateArmorForm"+this.props.armor._id).focus()
  }

  stopPropagation(e) {
      e.stopPropagation();
   }

  async updateAndToggle(e) {
    e.preventDefault();
    var fields = ['armorName']
    var id = e.target.getAttribute('id')
    this.setState({showErrors:true})
    await this.errorCheck(fields)
    console.log(this.state);
    if(this.state.updateArmorError) return
    console.log('too far');
    this.toggleHide();
    this.onSubmit(id);
  }

  onEscapeKey(e) {
    console.log(e.keyCode);
    if(e.keyCode===27){
      this.toggleHide()
    }
  }

  deepOnEscapeKey(e) {
    console.log('hit');
    this.stopPropagation(e)
    this.onEscapeKey(e)
  }

  async updateArmorInput(e){
    var name = e.target.name;
    var E = e.target.value;
    var fields = ['armorName'];
    await this.setState({[name]:E})
    await this.errorCheck(fields)
    await this.onChange(E)
    console.log(this.state);
  }

  errorCheck(fields){
    var errArr = [];
    function isTrue(ele){
      return ele === true;
    }

    for (var i = 0; i < fields.length; i++) {
      var error = fields[i]+'Error'
      if (this.state[fields[i]]==='') {
        this.setState({[error]:true})
        errArr.push(true)
      }else {
        this.setState({[error]:false})
        errArr.push(false)
      }
    }

    if(errArr.some(isTrue)===true){
      this.setState({updateArmorError:true})
      console.log('updateArmorError', true);
    }else {
      this.setState({updateArmorError:false})
      console.log('updateArmorError', false);
    }
  }

  resetState(){
    this.setState({
      armorName: '',
      armorNameError: '',
      updateArmorError: false,
      showErrors: false
    })
  }

  async closeModal(){
    await this.resetState();
    this.toggleHide();
    console.log('closeModal',this.state);
  }

  render() {
    return (
      <section className="update-armor-form-shader"
               id={"updateArmorForm"+this.props.armor._id}
               onClick={this.closeModal}
               onKeyDown={this.onEscapeKey}
               tabIndex="0">
        <form className='update-armor-form'
              onSubmit={this.updateAndToggle}
              id={this.props.armor._id}
              onClick={this.stopPropagation}>
          <div className="update-armor-form-input-div">
            <input className={"create-item-input " + (this.state.showErrors && this.state.armorNameError ? 'input-error ' :null)}
                   onChange={this.updateArmorInput}
                   placeholder={this.props.armor.name}
                   onKeyDown={this.deepOnEscapeKey}
                   name="armorName"></input>
          </div>
          <button className="update-armor-form-button"
                  id={this.id}
                  type="submit"
                  >Update</button>
        </form>
      </section>
    )
  }

}
