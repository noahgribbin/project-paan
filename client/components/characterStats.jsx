'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export default class CharacterStats extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    this.state = {
    }
  }

  render() {
    return (
      <section className="stat-div-holder">
        <h1 className="stat-title">{this.props.character.characterName}</h1>
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
    )
  }
}
CharacterStats.propTypes = {
  // character:  React.PropTypes.object.isRequired,
}
