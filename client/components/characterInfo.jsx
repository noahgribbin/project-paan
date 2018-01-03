'use strict';

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

export class CharacterInfo extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    console.log('props', props);

  }

  render() {
    if(this.props.spells) {
      var spell = this.props.spells.map(function(spell) {
        return(
          <div key={spell._id}>{spell.name}</div>
        )
      })
    }
    if(this.props.weapons) {
      var weapon = this.props.weapons.map(function(weapon) {
        return(
          <div key={weapon._id}>{weapon.name}</div>
        )
      })
    }
    if(this.props.armor) {
      var armor = this.props.armor.map(function(armor) {
        return(
          <div key={armor._id}>{armor.name}</div>
        )
      })
    }
    return (
      <div>
        <h1>name:{this.props.name}</h1>
        <h1>spells:{spell}</h1>
        <h1>weapons:{weapon}</h1>
        <h1>armor:{armor}</h1>
      </div>
    )
  }
}
