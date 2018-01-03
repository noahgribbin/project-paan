'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition'
import AnimateHeight from 'react-animate-height';

import CharacterManagmentModal from './characterManagmentModal.jsx'


export default class CharacterStats extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    this.toggleStats = this.toggleStats.bind(this)
    this.toggleCharacterManagment = this.toggleCharacterManagment.bind(this)
    this.makeUppercase = this.makeUppercase.bind(this)
    this.closeCharacterManagment = this.closeCharacterManagment.bind(this)
    this.stopPropagation = this.stopPropagation.bind(this)
    this.toggleHeight = this.toggleHeight.bind(this)
    this.state = {
      showAdvStats: false,
      showCharacterManagment: false,
      height: 0
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
  closeCharacterManagment(e){
    console.log("!!!");
    this.setState({
      showCharacterManagment: false,
    })
    this.stopPropagation(e)
  }
  stopPropagation(e){
    e.stopPropagation()
  }
  toggleHeight(){
    var newHeight = this.state.height === 0 ? 'auto': 0;
    console.log(newHeight);
    this.setState(prevState => ({
      height: newHeight
    }))
  }

  makeUppercase(str){
    var firstLetter = str.charAt(0).toUpperCase();
    var restOfString = str.slice(1);
    return firstLetter+restOfString
  }

  render() {
    return (
      <section className="stat-div-holder">
        <div className="stat-title-container">
          <h1 className="stat-title">{this.props.character.characterName}</h1>
          <div className="race-class-container">
            <p className="race-class-title">{ "- "+this.makeUppercase(this.props.character.race)}</p>
            <p className="race-class-title">{this.makeUppercase(this.props.character.class)}</p>
            <p className="race-class-title">{this.props.character.lv}</p>
          </div>
          {!this.props.hideCharacterManagment ?
          <span className="fa fa-ellipsis-v right character-stat-ellipsis"
                onClick={this.toggleCharacterManagment}></span>
              :null}
          {this.props.campaign ?
            <h1 className="stat-subtitle"
                onClick={this.props.toSessionPage}>
              {this.props.campaign.campaignName}
            </h1>
          :null}
            {this.state.showCharacterManagment ?
              <CharacterManagmentModal
                updateCharacter={this.props.updateCharacter}
                onInput = {this.props.onInput}
                toggleCharacterManagment = {this.toggleCharacterManagment}
                character={this.props.character}
                setCharacterAttributes={this.props.setCharacterAttributes}
                stopPropagation={this.stopPropagation}

                onJoinCodeInput = {this.props.onJoinCodeInput}
                onJoinPartySubmit={this.props.onJoinPartySubmit}


                onClick={this.props.deleteCharacter}
              />
            :null}
        </div>
        <span className="fa fa-caret-down stat-dropdown-toggle"
              onClick={this.toggleHeight}>
        </span>


        <AnimateHeight
           duration={ 500 }
           height={ this.state.height } // see props documentation bellow
         >


          <section className={`adv-stats-section`}>
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
          </section>
      </AnimateHeight>



      </section>
    )
  }
}
CharacterStats.propTypes = {
  // character:  React.PropTypes.object.isRequired,
}
