'use strict';

import React from 'react';
import { render } from 'react-dom';
import store from '../store.js';

import {JoinPartyForm} from './joinPartyForm.jsx'
import {DeleteCharacter} from './deleteCharacter.jsx'
import {UpdateCharacterForm} from './updateCharacterForm.jsx'
import  CharacterStats  from './characterStats.jsx'
import  UpdateCharacterButton  from './updateCharacterButton.jsx'
import  DeleteCharacterButton  from './deleteCharacterButton.jsx'


export default class CharacterHeader extends React.Component {
  constructor(props) {
    super(props)
    console.log('CharacterHeader props', this.props);
    this.toggleCharacterManagment = this.toggleCharacterManagment.bind(this);
    this.updateCharacter = this.props.updateCharacter.bind(this);
    this.state = {
      showCharacterManagment: false,
      campaignName: ''
    }
    console.log('!!!!!!!',this.props.campaignName);
  }

  toggleCharacterManagment() {
    this.setState(prevState => ({
      showCharacterManagment: !prevState.showCharacterManagment
    }))
  }

  onSubmit(e) {
    e.preventDefault();
    this.toggleCharacterManagment();
    this.props.onJoinPartySubmit();
  }

  render() {
    return(
      <section className="character-header">
        <CharacterStats
          character={this.props.character}
        />
        <h1 onClick={this.toggleCharacterManagment}>Click to Manage Character</h1>
        {this.props.campaign ? <h1>{this.props.campaign.campaignName}</h1> :null}
        { this.state.showCharacterManagment ?
          <section>
            <JoinPartyForm
              onSubmit = {this.onSubmit}
              onChange = {this.props.onJoinCodeInput}
              toggleCharacterManagment={this.toggleCharacterManagment}
              onJoinPartySubmit={this.props.onJoinPartySubmit}
            />

            <section className="button-container">

              <DeleteCharacterButton
                onClick={this.props.deleteCharacter}
              />
              <UpdateCharacterButton
                updateCharacter={this.updateCharacter}
                onInput = {this.props.onInput}
                toggleCharacterManagment = {this.toggleCharacterManagment}
                character={this.props.character}
                setCharacterAttrbutes={this.props.setCharacterAttrbutes}

              />
            </section>
          </section>
        :null}
      </section>
    )
  }
}
CharacterHeader.propTypes = {
  // character:  React.PropTypes.object.isRequired,
  // campaignName:  React.PropTypes.string
}
