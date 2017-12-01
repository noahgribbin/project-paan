'use strict';

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import store from '../store.js';
// import { history } from '../entry.jsx';

export class UpdateSpellForm extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    this.onChange = this.props.onChange.bind(this)
    this.onSubmit = this.props.onSubmit.bind(this)
    this.toggleHide = this.props.toggleHide.bind(this)
    this.setSpellAttributes = this.props.setSpellAttributes.bind(this)

    this.stopPropagation = this.stopPropagation.bind(this)
    this.updateSpellAttribute = this.updateSpellAttribute.bind(this)
    this.updateAndToggle = this.updateAndToggle.bind(this)
    this.onEscapeKey = this.onEscapeKey.bind(this)
    this.deepOnEscapeKey = this.deepOnEscapeKey.bind(this)
    this.resetState = this.resetState.bind(this)
    this.errorCheck = this.errorCheck.bind(this)
    this.deepOnEscapeKey = this.deepOnEscapeKey.bind(this)
    this.state = {
      spellName: this.props.spell.spellName,
      castingTime: this.props.spell.castingTime,
      range: this.props.spell.range,
      duration: this.props.spell.duration,
      components: this.props.spell.components,
      description: this.props.spell.spellName,
      spellNameError: false,
      castingTimeError: false,
      rangeError: false,
      durationError: false,
      componentsError: false,
      descriptionError: false,
      updateSpellError: false,
      showErrors: false
    }
  }
  componentDidMount(){
    console.log('mounted');
    var fields = ["spellName", "castingTime", "range", "duration", "components", "description"]
    var values = [this.props.spell.spellName, this.props.spell.castingTime, this.props.spell.range, this.props.spell.duration, this.props.spell.components, this.props.spell.description]
    document.getElementById("update-spell-form-shader-"+this.props.spell._id).focus()
    for (var i = 0; i < fields.length; i++) {
      var data = {
        property:fields[i],
        value: values[i]
      }
      console.log(data);
      store.dispatch(this.setSpellAttributes(data))
    }
  }


  stopPropagation(e) {
      e.stopPropagation();
   }

  async updateAndToggle(e) {
    e.preventDefault();
    var id = e.target.getAttribute('id')
    var fields = ["spellName", "castingTime", "range", "duration", "components", "description"]
    this.setState({showErrors:true})
    await this.errorCheck(fields)
    console.log(this.state);
    if(this.state.updateSpellError) return
    console.log('too far');
    this.toggleHide(e);
    this.onSubmit(id);
  }

  onEscapeKey(e) {
    if(e.keyCode===27){

      this.toggleHide()
    }
  }

  deepOnEscapeKey(e) {
    this.stopPropagation(e)
    this.onEscapeKey(e)
  }

  async updateSpellAttribute(e) {
    var fields = ["spellName", "castingTime", "range", "duration", "components", "description"]
    var data = {
      property:e.target.getAttribute("property"),
      value:e.target.value
    }
    if(data.value===null) {
      data.value=e.target.getAttribute("value")
    }
    await this.setState({[data.property]:data.value})
    await this.errorCheck(fields)
    store.dispatch(this.setSpellAttributes(data))
  }

  resetState(){
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
      updateSpellError: false,
      showErrors: false
    })
  }

  errorCheck(fields){
    var errArr = [];
    function isTrue(ele){
      return ele === true;
    }
    for (var i = 0; i < fields.length; i++) {
      var error = fields[i]+'Error';
      if(this.state[fields[i]]===''){
        this.setState({[error]:true})
        errArr.push(true)
      }else {
        this.setState({[error]:false})
        errArr.push(false)
      }
    }
    console.log(errArr);
    if(errArr.some(isTrue)){
      this.setState({updateSpellError:true})
      console.log('updateSpellError', true);
    }else {
      this.setState({updateSpellError:false})
      console.log('updateSpellError', false);
    }
  }

  render() {
    return (
      <section className="update-weapon-form-shader"
               id={"update-spell-form-shader-"+this.props.spell._id}
               onClick={this.toggleHide}
               onKeyDown={this.onEscapeKey}
               tabIndex="0"
               >
        <form className='update-spell-form'
              onSubmit={this.updateAndToggle}
              id={this.props.spell._id}
              onClick={this.stopPropagation}>
              <div className="create-item-input-div">
                <input className={"create-item-input " + (this.state.showErrors && this.state.updateSpellError && this.state.spellNameError ? ' input-error '  :null)}
                       onChange={this.updateSpellAttribute}
                       placeholder="spell name"
                       defaultValue={this.props.spell.name}
                       property="spellName"
                       onKeyDown={this.deepOnEscapeKey}
                       tabIndex="0"></input>
              </div>
              <div className="create-item-input-div">
                <input className={"create-item-input " + (this.state.showErrors && this.state.updateSpellError && this.state.castingTimeError ? ' input-error '  :null)}
                       onChange={this.updateSpellAttribute}
                       placeholder="casting time"
                       defaultValue={this.props.spell.castingTime}
                       property="castingTime"
                       onKeyDown={this.deepOnEscapeKey}
                       tabIndex="0"></input>
              </div>
              <div className="create-item-input-div">
                <input className={"create-item-input " + (this.state.showErrors && this.state.updateSpellError && this.state.rangeError ? ' input-error '  :null)}
                       onChange={this.updateSpellAttribute}
                       placeholder="range"
                       defaultValue={this.props.spell.range}
                       property="range"
                       onKeyDown={this.deepOnEscapeKey}
                       tabIndex="0"></input>
              </div>
              <div className="create-item-input-div">
                <input className={"create-item-input " + (this.state.showErrors && this.state.updateSpellError && this.state.durationError ? ' input-error '  :null)}
                       onChange={this.updateSpellAttribute}
                       placeholder="duration"
                       defaultValue={this.props.spell.duration}
                       property="duration"
                       onKeyDown={this.deepOnEscapeKey}
                       tabIndex="0"></input>
              </div>
              <div className="create-item-input-div">
                <input className={"create-item-input " + (this.state.showErrors && this.state.updateSpellError && this.state.componentsError ? ' input-error '  :null)}
                       onChange={this.updateSpellAttribute}
                       placeholder="components"
                       defaultValue={this.props.spell.components}
                       property="components"
                       onKeyDown={this.deepOnEscapeKey}
                       tabIndex="0"></input>
              </div>
              <div className="create-item-input-div">
                <textarea className={"create-item-text-area "  + (this.state.showErrors && this.state.updateSpellError && this.state.descriptionError ? ' input-error '  :null)}
                       onChange={this.updateSpellAttribute}
                       placeholder="description"
                       defaultValue={this.props.spell.description}
                       property="description"></textarea>
              </div>
          <button className="update-spell-form-button"
                  type="submit"
                  >Update</button>
        </form>
      </section>
    )
  }

}
