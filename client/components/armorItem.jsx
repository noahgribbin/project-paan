'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import {UpdateArmorForm} from './updateArmorForm.jsx';
import {ToggleArmorUpdateFormButton} from './toggleArmorUpdateFormButton.jsx';
import {DeleteArmorButton} from './deleteArmorButton.jsx';

export class ArmorItem extends React.Component {
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
    var armor = this.props.armor;
    var onSubmit = this.props.onSubmit;
    var onArmorNameInput = this.props.onArmorNameInput;
    var deleteArmor = this.props.deleteArmor;

    var toggleShow = this.toggleShowModal;
    var toggleHide = this.toggleHideModal;

    return(
      <li className= 'item-li'
          key={'armorLi_'+armor._id}>
          {armor.name}
  { this.state.showUpdateModal ?
          <UpdateArmorForm
              armor={armor}
              onSubmit={onSubmit}
              onChange={onArmorNameInput}
              toggleHide={toggleHide}
            />
        :null}
          <DeleteArmorButton
             onClick={deleteArmor}
             armor={armor}
          />
          <ToggleArmorUpdateFormButton
            toggleShow = {toggleShow}
            armor={armor}
          />
       </li>
    )
  }
}
