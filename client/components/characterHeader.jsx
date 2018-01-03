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
          campaign={this.props.campaign}
          toSessionPage={this.props.toSessionPage}

          onSubmit = {this.onSubmit}
          onJoinCodeInput = {this.props.onJoinCodeInput}
          onJoinPartySubmit={this.props.onJoinPartySubmit}

          deleteCharacter={this.props.deleteCharacter}

          updateCharacter={this.props.updateCharacter}
          onInput = {this.props.onInput}
          toggleCharacterManagment = {this.toggleCharacterManagment}
          setCharacterAttributes={this.props.setCharacterAttributes}

        />
      </section>
    )
  }
}
CharacterHeader.propTypes = {
  // character:  React.PropTypes.object.isRequired,
  // campaignName:  React.PropTypes.string
}
