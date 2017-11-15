'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import store from '../store.js';

export class CreateSpellForm extends React.Component {
  constructor(props) {
    super(props)
    this.onSpellNameInput = this.props.onSpellNameInput.bind(this);
    this.onSubmit = this.props.onSubmit.bind(this);
    this.setSpellAttributes = this.props.setSpellAttributes.bind(this);
    this.updateSpellAttribute = this.updateSpellAttribute.bind(this);
    this.submitAndClear = this.submitAndClear.bind(this);
    this.errorCheck = this.errorCheck.bind(this);
    this.resetSpellState = this.resetSpellState.bind(this);
    this.state = {
      spellName: '',
      castingTime: '',
      range: '',
      duration: '',
      components: '',
      description: '',
      spellNameError: false,
      castingTimeError: false,
      rangeError: false,
      durationError: false,
      componentsError: false,
      descriptionError: false,
      createSpellError: false,
      showErrors: false
    }
  }

    async updateSpellAttribute(e) {
    var fields = ['spellName', 'castingTime', 'range','duration','components', 'description'];
    var data = {
      value:e.target.getAttribute("value"),
      property:e.target.getAttribute("property")
    }
    if(data.value===null) {
      data.value=e.target.value
    }
    await this.setState({[data.property]:data.value})
    await this.errorCheck(fields)
    store.dispatch(this.setSpellAttributes(data))
  }

   async submitAndClear(e){
     e.preventDefault()
     var fields = ['spellName', 'castingTime', 'range','duration','components', 'description'];
     this.setState({showErrors: true})
     await this.errorCheck(fields)
     if(this.state.createSpellError) return
     this.onSubmit(e)
     this.resetSpellState()
     var form = document.getElementById("createSpellForm");
     form.reset();
  }

   errorCheck(fields) {
     var errArr = [];
     function isTrue(ele) {
       return ele === true;
     }
    //  debugger
     for (var i = 0; i < fields.length; i++) {
       var error = fields[i]+'Error'
       if(this.state[fields[i]] ===''){
         this.setState({[error]: true})
         errArr.push(true)
       }else {
         this.setState({[error]: false})
         errArr.push(false)
       }
     }
     console.log(errArr);
     if(errArr.some(isTrue)===true){
       this.setState({createSpellError: true})
       console.log('createSpellError',true);
     }else {
       this.setState({createSpellError: false})
       console.log('createSpellError',false);
     }
  }

  resetSpellState(){
    this.setState({
      spellName: '',
      castingTime: '',
      range: '',
      duration: '',
      components: '',
      description: '',
      spellNameError: false,
      castingTimeError: false,
      rangeError: false,
      durationError: false,
      componentsError: false,
      descriptionError: false,
      createSpellError: false,
      showErrors: false
    })
  }

  render() {
    return (
      <section className="create-item-section">
        <h1 className="create-item-title">Create a Spell</h1>
        <form className="create-item-form"
              onSubmit={this.submitAndClear}
              id="createSpellForm">
          <div className="create-item-input-div">
            <input className={"create-item-input " + (this.state.createSpellError && this.state.showErrors && this.state.spellNameError ? 'input-error' :null)}
                   onChange={this.updateSpellAttribute}
                   placeholder="spell name"
                   property="spellName"></input>
          </div>
          <div className="create-item-input-div">
            <input className={"create-item-input " + (this.state.createSpellError && this.state.showErrors && this.state.castingTimeError ? 'input-error' :null)}
                   onChange={this.updateSpellAttribute}
                   placeholder="casting time"
                   property="castingTime"></input>
          </div>
          <div className="create-item-input-div">
            <input className={"create-item-input " + (this.state.createSpellError && this.state.showErrors && this.state.rangeError ? 'input-error' :null)}
                   onChange={this.updateSpellAttribute}
                   placeholder="range"
                   property="range"></input>
          </div>
          <div className="create-item-input-div">
            <input className={"create-item-input " + (this.state.createSpellError && this.state.showErrors && this.state.durationError ? 'input-error' :null)}
                   onChange={this.updateSpellAttribute}
                   placeholder="duration"
                   property="duration"></input>
          </div>
          <div className="create-item-input-div">
            <input className={"create-item-input " + (this.state.createSpellError && this.state.showErrors && this.state.componentsError ? 'input-error' :null)}
                   onChange={this.updateSpellAttribute}
                   placeholder="components"
                   property="components"></input>
          </div>
          <div className="create-item-input-div">
            <textarea className={"create-item-text-area " + (this.state.createSpellError && this.state.showErrors && this.state.descriptionError ? 'input-error' :null)}
                   onChange={this.updateSpellAttribute}
                   placeholder="description"
                   property="description"></textarea>
          </div>
          <button className="create-item-button">Create</button>
        </form>
      </section>
    )
  }
}

CreateSpellForm.propTypes = {
  onSpellNameInput: React.PropTypes.func,
  onSubmit: React.PropTypes.func
}
