'use strict';

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import {UpdateWeaponForm} from './updateWeaponForm.jsx';
import {ToggleWeaponUpdateFormButton} from './toggleWeaponUpdateFormButton.jsx';
import {DeleteWeaponButton} from './deleteWeaponButton.jsx';

export class WeaponItem extends React.Component {
  constructor(props) {
    super(props)

    this.toggleShowModal = this.toggleShowModal.bind(this);
    this.toggleHideModal = this.toggleHideModal.bind(this);
    this.state = {
      showUpdateModal: false
    }
  }

  toggleShowModal() {
    console.log('toggleShowModal');
    this.setState(prevState => ({
      showUpdateModal:!prevState.showUpdateModal
    }));
    document.body.style.overflow = 'hidden';
  }

  toggleHideModal() {
    console.log('toggleHideModal');
    this.setState(prevState => ({
      showUpdateModal:!prevState.showUpdateModal
    }));
    document.body.style.overflow = 'visible';
  }

  render() {
  var weapon = this.props.weapon;
  var onSubmit = this.props.onSubmit;
  var onWeaponNameInput = this.props.onWeaponNameInput;
  var deleteWeapon = this.props.deleteWeapon;

  var toggleShow = this.toggleShowModal;
  var toggleHide = this.toggleHideModal;

    return (
      <li className= 'item-li'
          key={'weaponLi_'+weapon._id}>
          <div className="weapon-label-container">
            <p className="item-name item-label">{weapon.name}</p>
            <p className="item-dice item-label">{weapon.dice}</p>
            <p className="item-damage item-label">{weapon.damage}</p>
          </div>
  { this.state.showUpdateModal ?
          <UpdateWeaponForm
              weapon={weapon}
              onSubmit={onSubmit}
              onChange={this.props.onInput}
              toggleHide={toggleHide}
              setWeaponAttributes = {this.props.setWeaponAttributes}
            />
        :null}
        <div className="weapon-button-container">
          <DeleteWeaponButton
             onClick={deleteWeapon}
             weapon={weapon}
          />
          <ToggleWeaponUpdateFormButton
            toggleShow = {toggleShow}
            weapon={weapon}
          />
        </div>
       </li>
    )
  }

}
