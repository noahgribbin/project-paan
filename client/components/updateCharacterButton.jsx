'use strict';

import React from 'react';
import { render } from 'react-dom'
import PropTypes from 'prop-types'

import  { UpdateCharacterForm }  from './updateCharacterForm.jsx'


export default class UpdateCharacterButton extends React.Component {
  constructor(props){
    super(props)
    console.log('UpdateCharacterButton',this);
    this.toggleShow = this.toggleShow.bind(this)
    this.toggleHide = this.toggleHide.bind(this)
    // this.updateAndToggle = this.updateAndToggle.bind(this)
    // this.onEscapeKey = this.onEscapeKey.bind(this)
    // this.deepOnEscapeKey = this.deepOnEscapeKey.bind(this)
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
    console.log('hi');
    this.setState(prevState => ({
      showUpdateModal:!prevState.showUpdateModal
    }));
    document.body.style.overflow="visible"
    this.props.toggleCharacterManagment()
  }

  stopPropagation(e){
    e.stopPropagation();
  }

  render(){
    return (
      <section className="update-character-form-holder">
        <p onClick={this.toggleShow}
            className="update-character-form-title">
            Update character
        </p>
        {this.state.showUpdateModal ?
          <UpdateCharacterForm
            toggleHide={this.toggleHide}
            stopPropagation={this.stopPropagation}
            // updateAndToggle={this.updateAndToggle}
            onEscapeKey={this.onEscapeKey}
            deepOnEscapeKey={this.deepOnEscapeKey}
            onSubmit={this.props.updateCharacter}
            onInput={this.props.onInput}
            character={this.props.character}
            setCharacterAttrbutes={this.props.setCharacterAttrbutes}
          />
        :null}
      </section>
    )
  }
}
