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
    // this.loadCharacterData = this.props.loadCharacterData.bind(this);
    this.state = {
      showCharacterManagment: false,
      campaignName: ''
    }
    console.log('!!!!!!!',this.props.campaignName);
  }


  // async componentWillMount(){
  //   console.log('COMPINENT WILL MOUNT');
  //   await this.loadCharacterData()
  //   await this.setState({campaignName: this.props.campaignName})
  //
  // }
  //  async componentDidMount() {
  //    console.log('COMPINENT DID MOUNT');
  //   console.log('localState',this.state);
  // }


  toggleCharacterManagment() {
    this.setState(prevState => ({
      showCharacterManagment: !prevState.showCharacterManagment
    }))
  }

  toggleJoinParty() {
// this.setState party
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
        {this.props.character ? <h1>{this.props.updateCampaignName}</h1> :null}
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
