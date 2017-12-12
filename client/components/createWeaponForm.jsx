'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import store from '../store.js';


export class CreateWeaponForm extends React.Component {
  constructor(props) {
    super(props)
    this.onWeaponNameInput = this.props.onWeaponNameInput.bind(this);
    this.onSubmit = this.props.onSubmit.bind(this);
    // this.showForm = this.props.showForm.bind(this);
    this.setWeaponAttributes = this.props.setWeaponAttributes.bind(this);
    this.updateWeaponAttribute = this.updateWeaponAttribute.bind(this);
    this.submitAndClear = this.submitAndClear.bind(this);
    this.errorCheck = this.errorCheck.bind(this);
    this.resetWeaponState = this.resetWeaponState.bind(this);
    this.state = {
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
    }
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

  async submitAndClear(e){
    e.preventDefault()
    var fields = ['weaponName', 'diceAmount', 'diceValue', 'damageType']
    this.setState({showErrors: true})
    await this.errorCheck(fields)
    if(this.state.createWeaponError) return
    console.log('!!!!!!!!!!!!!!!!!!!!!!!');
    this.onSubmit(e)
    this.props.closeFormOpenList()
    this.resetWeaponState()
    var form = document.getElementById("createWeaponForm");
    form.reset();

  }

  errorCheck(fields){
    console.log('ERROR CHECK STATE',this.state);
    var errArr = [];
    function isTrue(ele){
      return ele === true
    }
    for (var i = 0; i < fields.length; i++) {
      var error = fields[i]+'Error'
      console.log(this.state[fields[i]]);
      if(this.state[fields[i]] === ''){
        this.setState({[error]: true})
        errArr.push(true)
      }else {
        this.setState({[error]: false})
        errArr.push(false)
      }
    }
    console.log(errArr);
    if(errArr.some(isTrue)){
      this.setState({createWeaponError:true})
    }else {
      this.setState({createWeaponError:false})
    }
  }

  resetWeaponState(){
    this.setState({
      weaponName: '',
      diceAmount: '',
      diceValue: '',
      damageType: '',
      showErrors:false,
      weaponNameError:false,
      diceAmount:false,
      diceValue:false,
      damageType:false,
      createWeaponError:false
    })
  }


  render() {
    return (
      <section className="create-item-section">
        <h1 className="create-item-h1">Create a Weapon</h1>
        <form className={"create-item-form "}
              onSubmit={this.submitAndClear}
              id="createWeaponForm"
          >
          <div className="create-item-input-div">
            <input className={"create-item-input "+(this.state.weaponNameError && this.state.showErrors ?  'input-error' : null )}
                   onChange={this.updateWeaponAttribute}
                   placeholder="weapon name"
                   type='weaponName'
                   id="createWeaponInput"
                  //  required
                   ></input>
          </div>
          <section className="div-container">

            <div className="weapon-value-container">
              <div className="dice-amount">
                <p className={"button-text " + (this.state.diceAmount === "1" ?  ' active ' : null ) + (this.state.diceAmountError && this.state.showErrors ? ' input-error' :null)}
                   onClick={this.updateWeaponAttribute}
                   value="1"
                   type="diceAmount">1</p>
              </div>
              <div className="dice-amount">
                <p className={"button-text "+ (this.state.diceAmount === "2" ?  ' active ' : null )  + (this.state.diceAmountError && this.state.showErrors ? ' input-error' :null)}
                   onClick={this.updateWeaponAttribute}
                   value="2"
                   type="diceAmount">2</p>
              </div>
              <div className="dice-amount">
                <p className={"button-text "+ (this.state.diceAmount === "3" ?  ' active ' : null )  + (this.state.diceAmountError && this.state.showErrors ? ' input-error' :null)}
                   onClick={this.updateWeaponAttribute}
                   value="3"
                   type="diceAmount">3</p>
              </div>
            </div>
            <div className="weapon-value-container">
              <div className="dice-value">
                <p className={"button-text "+ (this.state.diceValue === "d4" ?  ' active ' : null )  + (this.state.diceValueError && this.state.showErrors ? ' input-error' :null)}
                   onClick={this.updateWeaponAttribute}
                   value="d4"
                   type="diceValue">d4</p>
              </div>
              <div className="dice-value">
                <p className={"button-text "+ (this.state.diceValue === "d6" ?  ' active ' : null ) + (this.state.diceValueError && this.state.showErrors ? ' input-error' :null)}
                   onClick={this.updateWeaponAttribute}
                   value="d6"
                   type="diceValue">d6</p>
              </div>
              <div className="dice-value">
                <p className={"button-text "+ (this.state.diceValue === "d8" ?  ' active ' : null ) + (this.state.diceValueError && this.state.showErrors ? ' input-error' :null)}
                   onClick={this.updateWeaponAttribute}
                   value="d8"
                   type="diceValue">d8</p>
              </div>
              <div className="dice-value">
                <p className={"button-text "+ (this.state.diceValue === "d10" ?  ' active ' : null ) + (this.state.diceValueError && this.state.showErrors ? ' input-error' :null)}
                   onClick={this.updateWeaponAttribute}
                   value="d10"
                   type="diceValue">d10</p>
              </div>
              <div className="dice-value">
                <p className={"button-text "+ (this.state.diceValue === "d12" ?  ' active ' : null ) + (this.state.diceValueError && this.state.showErrors ? ' input-error' :null)}
                   onClick={this.updateWeaponAttribute}
                   value="d12"
                   type="diceValue">d12</p>
              </div>
            </div>
            <div className="weapon-value-container">
              <div className="dice-type">
                <p className={"button-text "+ (this.state.damageType === "bludgeoning" ?  ' active ' : null ) + (this.state.damageTypeError && this.state.showErrors ? ' input-error' :null)}
                   onClick={this.updateWeaponAttribute}
                   value="bludgeoning"
                   type="damageType">(Blg)</p>
              </div>
              <div className="dice-type">
                <p className={"button-text "+ (this.state.damageType === "piercing" ?  ' active ' : null ) + (this.state.damageTypeError && this.state.showErrors ? ' input-error' :null)}
                   onClick={this.updateWeaponAttribute}
                   value="piercing"
                   type="damageType">(Prc)</p>
              </div>
              <div className="dice-type">
                <p className={"button-text "+ (this.state.damageType === "slashing" ?  ' active ' : null ) + (this.state.damageTypeError && this.state.showErrors ? ' input-error' :null)}
                   onClick={this.updateWeaponAttribute}
                   value="slashing"
                   type="damageType">(Slsh)</p>
              </div>
          </div>
        </section>
          {this.state.notSelectedError ? <p>P</p>:null}
          <button className="create-item-button">Create</button>
        </form>
      </section>
    )
  }
}

CreateWeaponForm.propTypes = {
  onWeaponNameInput: React.PropTypes.func,
  onSubmit: React.PropTypes.func
}
