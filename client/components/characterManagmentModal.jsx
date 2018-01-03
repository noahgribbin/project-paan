'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import  UpdateCharacterButton  from './updateCharacterButton.jsx'
import  DeleteCharacterButton  from './deleteCharacterButton.jsx'

export default class CharacterManagmentModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render(){
    return(
      <section>
        <div className="update-weapon-form-shader"
              onClick={this.props.toggleCharacterManagment}>
            <ul className="character-managment-ul"
                onClick={this.props.stopPropagation}>
              <li>
                <UpdateCharacterButton
                  updateCharacter={this.props.updateCharacter}
                  onInput = {this.props.onInput}
                  toggleCharacterManagment = {this.props.toggleCharacterManagment}
                  character={this.props.character}
                  setCharacterAttributes={this.props.setCharacterAttributes}
                />
              </li>
              <li>
                <DeleteCharacterButton
                  onClick={this.props.onClick}
                />
              </li>
              <li>
                <form className="join-party-form" onSubmit={this.props.onJoinPartySubmit}>
                  <input onChange={this.props.onJoinCodeInput}
                         placeholder="party code"
                         className="join-party-form-input"></input>
                </form>
              </li>

            </ul>
        </div>
      </section>
    )
  }
}
