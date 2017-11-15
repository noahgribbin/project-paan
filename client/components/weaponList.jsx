'use strict';

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import store from '../store.js';
import { history } from '../entry.jsx';

import {UpdateWeaponForm} from './updateWeaponForm.jsx';
import {ToggleWeaponUpdateFormButton} from './toggleWeaponUpdateFormButton.jsx';
import {DeleteWeaponButton} from './deleteWeaponButton.jsx';
import {WeaponItem} from './weaponItem.jsx';

export class WeaponList extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    this.deleteWeapon = this.props.deleteWeapon.bind(this);
    this.onWeaponNameInput = this.props.onWeaponNameInput.bind(this);
    this.state = {
    }
  }

  render() {
    if(this.props.weapons){

    return (
        <section className="weapon-list-section">
        <ul>
          {this.props.weapons.map((item,index) =>
            <WeaponItem
              key={'weaponItem'+item._id}
              weapon={item}
              onSubmit = {this.props.onSubmit}
              onInput = {this.props.onInput}
              deleteWeapon = {this.deleteWeapon}
              onWeaponNameInput = {this.onWeaponNameInput}
              setWeaponAttributes = {this.props.setWeaponAttributes}
            />
          )}
        </ul>
      </section>
    )
  }else{
    return(
      <div></div>
    )
  }

  }
}

WeaponList.propTypes = {
  // onClick: React.PropTypes.func
  // weapons: React.PropTypes.object,
}
