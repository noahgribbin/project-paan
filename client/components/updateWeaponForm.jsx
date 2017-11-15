'use strict';

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import store from '../store.js';
// import { history } from '../entry.jsx';

export class UpdateWeaponForm extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.props.onChange.bind(this)
    this.onSubmit = this.props.onSubmit.bind(this)
    this.toggleHide = this.props.toggleHide.bind(this)
    this.setWeaponAttributes = this.props.setWeaponAttributes.bind(this)

    this.updateAndToggle = this.updateAndToggle.bind(this)
    this.stopPropagation = this.stopPropagation.bind(this)
    this.onEscapeKey = this.onEscapeKey.bind(this)
    this.deepOnEscapeKey = this.deepOnEscapeKey.bind(this)
    this.submitAndToggle = this.submitAndToggle.bind(this)
    this.updateWeaponAttribute = this.updateWeaponAttribute.bind(this)
    this.resetState = this.resetState.bind(this)
    this.errorCheck = this.errorCheck.bind(this)

    this.state = {
      weaponName: '',
      diceAmount: '',
      diceValue: '',
      damageType: '',
      weaponNameError:false,
      diceAmountError:false,
      diceValueError:false,
      damageTypeError:false,
      updateWeaponError:false,
      showErrors:false
    }
  }

  componentDidMount(){
    console.log('mounted');
    document.getElementById("update-weapon-form-shader-"+this.props.weapon._id).focus()
  }

  stopPropagation(e) {
      e.stopPropagation();
   }

  updateAndToggle(e) {
    console.log('HERE');
    if(e){
      e.preventDefault();
    }
    var id = e.target.getAttribute('id')
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

  async updateWeaponAttribute(e){
    var fields = ['weaponName', 'diceAmount', 'diceValue', 'damageType']
    var data = {
      value:e.target.getAttribute("value"),
      type:e.target.getAttribute("type")
    }
    if(data.value===null) {
      data.value=e.target.value
    }
    await this.setState({[data.type]:data.value})
    await this.errorCheck(fields)
    store.dispatch(this.setWeaponAttributes(data))
  }

  async submitAndToggle(e) {
    e.preventDefault();
    var id = e.target.getAttribute('id')
    var fields = ['weaponName', 'diceAmount', 'diceValue', 'damageType']
    this.setState({showErrors:true})
    await this.errorCheck(fields)
    console.log(this.state);
    if(this.state.updateWeaponError) return
    console.log('too far');
    this.onSubmit(id)
    this.toggleHide()
  }

  errorCheck(fields){
    var errArr = [];
    function isTrue(ele){
      return ele ===  true;
    }
    for (var i = 0; i < fields.length; i++) {
      var error = fields[i]+'Error'
      if(this.state[fields[i]]===''){
        this.setState({[error]: true})
        errArr.push(true)
      }else {
        this.setState({[error]:false})
        errArr.push(false)
      }
    }
    console.log(errArr);
    if(errArr.some(isTrue)){
      this.setState({updateWeaponError:true})
      console.log('updateWeaponError', true);
    }else {
      this.setState({updateWeaponError:false})
      console.log('updateWeaponError', false);
    }
  }

  resetState(){
    this.setState({
      weaponName: '',
      diceAmount: '',
      diceValue: '',
      damageType: '',
      weaponNameError:false,
      diceAmountError:false,
      diceValueError:false,
      damageTypeError:false,
      createWeaponError:false,
      showErrors:false
    })
  }

  render() {
    return (
      <section className="update-weapon-form-shader"
               id={"update-weapon-form-shader-"+this.props.weapon._id}
               onClick={this.props.toggleHide}
               onKeyDown={this.onEscapeKey}
               tabIndex="0">
               <form className="create-item-form" onSubmit={this.submitAndToggle}
                     onClick={this.stopPropagation}
                     id={this.props.weapon._id}
                 >
                 <div className="create-item-input-div">
                   <input className={"create-item-input "  + (this.state.showErrors && this.state.weaponNameError && this.state.updateWeaponError ? ' input-error ' :null)}
                          onChange={this.updateWeaponAttribute}
                          placeholder="weapon name"
                          type="weaponName"></input>
                 </div>
                 <div className="dice-amount-container">
                   <div className="dice-amount">
                     <p className={"button-text "+ (this.state.diceAmount === "1" ?  ' active ' : null )  + (this.state.showErrors && this.state.diceAmountError && this.state.updateWeaponError ? ' input-error ' :null)}
                        onClick={this.updateWeaponAttribute}
                        value="1"
                        type="diceAmount">1</p>
                   </div>
                   <div className="dice-amount">
                     <p className={"button-text "+ (this.state.diceAmount === "2" ?  ' active ' : null )  + (this.state.showErrors && this.state.diceAmountError && this.state.updateWeaponError ? ' input-error ' :null)}
                        onClick={this.updateWeaponAttribute}
                        value="2"
                        type="diceAmount">2</p>
                   </div>
                   <div className="dice-amount ">
                     <p className={"button-text "+ (this.state.diceAmount === "3" ?  ' active ' : null )  + (this.state.showErrors && this.state.diceAmountError && this.state.updateWeaponError ? ' input-error ' :null)}
                        onClick={this.updateWeaponAttribute}
                        value="3"
                        type="diceAmount">3</p>
                   </div>
                 </div>
                 <div className="dice-value-container">
                   <div className="dice-value ">
                     <p className={"button-text "+ (this.state.diceValue === "d4" ?  ' active ' : null )  + (this.state.showErrors && this.state.diceValueError && this.state.updateWeaponError ? ' input-error ' :null)}
                        onClick={this.updateWeaponAttribute}
                        value="d4"
                        type="diceValue">d4</p>
                   </div>
                   <div className="dice-value ">
                     <p className={"button-text "+ (this.state.diceValue === "d6" ?  ' active ' : null )  + (this.state.showErrors && this.state.diceValueError && this.state.updateWeaponError ? ' input-error ' :null)}
                        onClick={this.updateWeaponAttribute}
                        value="d6"
                        type="diceValue">d6</p>
                   </div>
                   <div className="dice-value ">
                     <p className={"button-text "+ (this.state.diceValue === "d8" ?  ' active ' : null )  + (this.state.showErrors && this.state.diceValueError && this.state.updateWeaponError ? ' input-error ' :null)}
                        onClick={this.updateWeaponAttribute}
                        value="d8"
                        type="diceValue">d8</p>
                   </div>
                   <div className="dice-value ">
                     <p className={"button-text "+ (this.state.diceValue === "d10" ?  ' active ' : null )  + (this.state.showErrors && this.state.diceValueError && this.state.updateWeaponError ? ' input-error ' :null)}
                        onClick={this.updateWeaponAttribute}
                        value="d10"
                        type="diceValue">d10</p>
                   </div>
                   <div className="dice-value ">
                     <p className={"button-text "+ (this.state.diceValue === "d12" ?  ' active ' : null )  + (this.state.showErrors && this.state.diceValueError && this.state.updateWeaponError ? ' input-error ' :null)}
                        onClick={this.updateWeaponAttribute}
                        value="d12"
                        type="diceValue">d12</p>
                   </div>
                 </div>
                 <div className="damage-type-container">
                   <div className="dice-type ">
                     <p className={"button-text "+ (this.state.damageType === "bludgeoning" ?  ' active ' : null ) + (this.state.showErrors && this.state.damageTypeError && this.state.updateWeaponError ? ' input-error ' :null)}
                        onClick={this.updateWeaponAttribute}
                        value="bludgeoning"
                        type="damageType">(Blg)</p>
                   </div>
                   <div className="dice-type ">
                     <p className={"button-text "+ (this.state.damageType === "piercing" ?  ' active ' : null ) + (this.state.showErrors && this.state.damageTypeError && this.state.updateWeaponError ? ' input-error ' :null)}
                        onClick={this.updateWeaponAttribute}
                        value="piercing"
                        type="damageType">(Prc)</p>
                   </div>
                   <div className="dice-type ">
                     <p className={"button-text "+ (this.state.damageType === "slashing" ?  ' active ' : null ) + (this.state.showErrors && this.state.damageTypeError && this.state.updateWeaponError ? ' input-error ' :null)}
                        onClick={this.updateWeaponAttribute}
                        value="slashing"
                        type="damageType">(Slsh)</p>
                   </div>
                 </div>
                 <button className="create-item-button">Create</button>
               </form>
      </section>
    )
  }

}
