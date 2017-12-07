'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import {WeaponList} from './weaponList.jsx'
import {CreateWeaponForm} from './createWeaponForm.jsx'

export class WeaponSection extends React.Component {
  constructor(props){
    super(props)
    console.log(this);
    this.showForm=this.showForm.bind(this)
    this.state = {
      showForm: false
    }
  }

  showForm(){
    console.log(1);
    this.setState(prevState =>({
      showForm: !prevState.showForm
    }))
  }

  render() {
    return(
      <section>
        <div className="item-title-continer">
          <h1 className="item-section-title">Weapons</h1>
          <span className="fa fa-plus right plus-form-toggle"
                onClick={this.showForm}></span>
        </div>
        {this.state.showForm ?
        <CreateWeaponForm
          onSubmit = {this.props.createWeapon}
          onWeaponNameInput = {this.props.onWeaponNameInput}
          setWeaponAttributes = {this.props.setWeaponAttributes}
        />
        :null}
        <WeaponList
          deleteWeapon ={this.props.deleteWeapon}
          weapons = {this.props.weapons}
          onSubmit = {this.props.onSubmit}
          onInput = {this.props.onInput}
          onWeaponNameInput = {this.props.onWeaponNameInput}
          setWeaponAttributes = {this.props.setWeaponAttributes}
        />

    </section>
    )
  }
}
