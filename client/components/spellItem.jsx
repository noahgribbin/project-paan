'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import AnimateHeight from 'react-animate-height';

import {UpdateSpellForm} from './updateSpellForm.jsx';
import {ToggleSpellUpdateFormButton} from './toggleSpellUpdateFormButton.jsx';
import {DeleteSpellButton} from './deleteSpellButton.jsx';

export class SpellItem extends React.Component {
  constructor(props) {
    super(props)

    this.toggleShowModal = this.toggleShowModal.bind(this);
    this.toggleHideModal = this.toggleHideModal.bind(this);
    this.toggleShowInfo = this.toggleShowInfo.bind(this);
    this.toggleHeight = this.toggleHeight.bind(this);
    this.state = {
      showUpdateModal: false,
      showInfo: false,
      height: 0
    }
  }

  toggleShowModal(e) {
    e.stopPropagation();
    this.setState(prevState => ({
      showUpdateModal:!prevState.showUpdateModal
    }));
    document.body.style.overflow = 'hidden';
  }

  toggleHideModal(e) {
    e.stopPropagation();
    this.setState(prevState => ({
      showUpdateModal:!prevState.showUpdateModal
    }));
    document.body.style.overflow = 'visible';
  }

  toggleShowInfo(e){
    this.setState(prevState => ({
      showInfo:!prevState.showInfo
    }));
  }

  toggleHeight(){
    var newHeight = this.state.height === 0 ? 'auto': 0;
    console.log(newHeight);
    this.setState(prevState => ({
      height: newHeight
    }))
  }

  render() {
    var spell = this.props.spell;
    var onSubmit = this.props.onSubmit;
    var onSpellNameInput = this.props.onSpellNameInput;
    var deleteSpell = this.props.deleteSpell;

    var toggleShow = this.toggleShowModal;
    var toggleHide = this.toggleHideModal;
    return (
      <section>
        <li className= 'item-li'
            key={'armorLi_'+spell._id}
            >
              <div className="spell-label-container">
                <p className="item-name spell-item-label">{spell.name}</p>
                <span className="fa fa-caret-down"
                  onClick={this.toggleHeight}></span>
              </div>
        { this.state.showUpdateModal ?
          <UpdateSpellForm
              spell={spell}
              onSubmit={onSubmit}
              onChange={onSpellNameInput}
              toggleHide={toggleHide}
              setSpellAttributes = {this.props.setSpellAttributes}
          />
        :null}
            <DeleteSpellButton
               onClick={deleteSpell}
               spell={spell}
            />
            <ToggleSpellUpdateFormButton
              toggleShow = {toggleShow}
              spell={spell}
            />
         </li>

        <AnimateHeight
           duration={ 250 }
           height={ this.state.height }
         >
         <div className="spell-info-container">
           <p className="spell-item-label">Casting time: {spell.castingTime}</p>
           <p className="spell-item-label">Range: {spell.range}</p>
           <p className="spell-item-label">Duration: {spell.duration}</p>
           <p className="spell-item-label">Components: {spell.components}</p>
           <p className="spell-item-label"> {spell.description}</p>
         </div>
       </AnimateHeight>

     </section>
    )
  }
}
