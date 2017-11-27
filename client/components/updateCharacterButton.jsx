'use strict';

import React from 'react';
import { render } from 'react-dom'
import PropTypes from 'prop-types'

import  { UpdateCharacterForm }  from './updateCharacterForm.jsx'


export default class UpdateCharacterButton extends React.Component {
  constructor(props){
    super(props)
    console.log('UpdateCharacterButton',this);
    // this.updateCharacter = this.props.updateCharacter.bind(this)
    // this.onInput = this.props.onInput.bind(this)
    this.toggleShow = this.toggleShow.bind(this)
    this.toggleHide = this.toggleHide.bind(this)
    this.updateAndToggle = this.updateAndToggle.bind(this)
    this.onEscapeKey = this.onEscapeKey.bind(this)
    this.deepOnEscapeKey = this.deepOnEscapeKey.bind(this)
    this.state={
      showUpdateModal: false
    }
  }

  toggleShow() {
    console.log('toggleShow');
    this.setState(prevState => ({
      showUpdateModal:!prevState.showUpdateModal
    }))
    document.body.style.overflow="hidden"
  }
  toggleHide() {
    this.setState(prevState => ({
      showUpdateModal:!prevState.showUpdateModal
    }));
    document.body.style.overflow="visible"
    this.props.toggleCharacterManagment()
  }

  stopPropagation(e){
    e.stopPropagation();
  }

  updateAndToggle(e) {
    e.preventDefault()
    this.toggleHide();
    this.props.updateCharacter();
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

  render(){
    return (
      <section className="update-character-form-holder">
        <h1 onClick={this.toggleShow}
            className="update-character-form-title">
            Update character
        </h1>
        {this.state.showUpdateModal ?
          <UpdateCharacterForm
            toggleHide={this.toggleHide}
            stopPropagation={this.stopPropagation}
            updateAndToggle={this.updateAndToggle}
            onEscapeKey={this.onEscapeKey}
            deepOnEscapeKey={this.deepOnEscapeKey}
            onSubmit={this.props.updateCharacter}
            onInput={this.props.onInput}
            character={this.props.character}
            lv={this.props.lv}
            hp={this.props.hp}
            ac={this.props.ac}
            strength={this.props.strength}
            dexterity={this.props.dexterity}
            constitution={this.props.constitution}
            intelligence={this.props.intelligence}
            wisdom={this.props.wisdom}
            charisma={this.props.charisma}
          />
        :null}
      </section>
    )
  }
}
