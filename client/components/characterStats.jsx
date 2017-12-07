'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import  UpdateCharacterButton  from './updateCharacterButton.jsx'
import  DeleteCharacterButton  from './deleteCharacterButton.jsx'


export default class CharacterStats extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    this.toggleStats = this.toggleStats.bind(this)
    this.toggleCharacterManagment = this.toggleCharacterManagment.bind(this)
    this.toggleJoinInput = this.toggleJoinInput.bind(this)
    this.closeCharacterManagment = this.closeCharacterManagment.bind(this)
    this.stopPropagation = this.stopPropagation.bind(this)
    this.state = {
      showAdvStats: false,
      showCharacterManagment: false
    }
  }

  toggleStats(){
    this.setState(prevState => ({
      showAdvStats: !prevState.showAdvStats
    }))
  }
  toggleCharacterManagment(){
    this.setState(prevState => ({
      showCharacterManagment: !prevState.showCharacterManagment
    }))
  }
  toggleJoinInput(){
    this.setState(prevState => ({
      showJoinInput: !prevState.showJoinInput
    }))
  }
  closeCharacterManagment(e){
    console.log("!!!");
    this.setState({
      showCharacterManagment: false,
      showJoinInput: false
    })
    this.stopPropagation(e)
  }
  stopPropagation(e){
    e.stopPropagation()
  }
  render() {
    return (
      <section className="stat-div-holder">
        <div className="stat-title-container">
          <h1 className="stat-title">{this.props.character.characterName}</h1>
          <span className="fa fa-ellipsis-v right character-stat-ellipsis"
                onClick={this.toggleCharacterManagment}></span>
          {this.props.campaign ?
            <h1 className="stat-subtitle"
                onClick={this.props.toSessionPage}>
              {this.props.campaign.campaignName}
            </h1>
          :null}
          {this.state.showCharacterManagment ?
          <ul className="character-managment-ul"
            // onMouseOut={this.closeCharacterManagment}
            onClick={this.stopPropagation}>

            <li >
              <UpdateCharacterButton
                updateCharacter={this.props.updateCharacter}
                onInput = {this.props.onInput}
                toggleCharacterManagment = {this.toggleCharacterManagment}
                character={this.props.character}
                setCharacterAttributes={this.props.setCharacterAttributes}
              />
            </li>

            <li>
              <DeleteCharacterButton
                onClick={this.props.deleteCharacter}
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
          :null}
        </div>
        <span className="fa fa-caret-down stat-dropdown-toggle"
              onClick={this.toggleStats}>
        </span>
        { this.state.showAdvStats ?
          <section className="adv-stats-section">
            <div className="stat-div">
              <h1 className="stat-div-label">LV</h1>
              <h1 className="stat-div-value">{this.props.character.lv}</h1>
            </div>
            <div className="stat-div">
              <h1 className="stat-div-label">HP</h1>
              <h1 className="stat-div-value">{this.props.character.hp}</h1>
            </div>
            <div className="stat-div">
              <h1 className="stat-div-label">AC</h1>
              <h1 className="stat-div-value">{this.props.character.ac}</h1>
            </div>
            <section className="stat-div-holder">
              <div className="stat-div">
                <h1 className="stat-div-label">STR</h1>
                <h1 className="stat-div-value">{this.props.character.strength}</h1>
              </div>
              <div className="stat-div">
                <h1 className="stat-div-label">DEX</h1>
                <h1 className="stat-div-value">{this.props.character.dexterity}</h1>
              </div>
              <div className="stat-div">
                <h1 className="stat-div-label">CON</h1>
                <h1 className="stat-div-value">{this.props.character.constitution}</h1>
              </div>
              <div className="stat-div">
                <h1 className="stat-div-label">INT</h1>
                <h1 className="stat-div-value">{this.props.character.intelligence}</h1>
              </div>
              <div className="stat-div">
                <h1 className="stat-div-label">WIS</h1>
                <h1 className="stat-div-value">{this.props.character.wisdom}</h1>
              </div>
              <div className="stat-div">
                <h1 className="stat-div-label">CHA</h1>
                <h1 className="stat-div-value">{this.props.character.charisma}</h1>
              </div>
          </section>
        </section> :null}
      </section>
    )
  }
}
CharacterStats.propTypes = {
  // character:  React.PropTypes.object.isRequired,
}
