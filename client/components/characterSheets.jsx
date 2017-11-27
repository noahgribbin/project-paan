'use strict';

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import {CharacterInfo} from './characterInfo.jsx';

export class CharacterSheets extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    console.log('props',props);
  }

  render() {

    if(this.props.dm.campaignMembers) {
      console.log('if has members', this.props.dm.campaignMembers);
      var member = this.props.dm.campaignMembers.map(function(member) {
        console.log('member',member);
        return (
          <CharacterInfo
            key={'characterSheet_'+member._id}
            name={member.characterName}
            spells={member.spells}
            armor={member.armor}
            weapons={member.weapons}
            >
            </CharacterInfo>
        )
      })
    }else{
      var member = this.props.dm.map(function(member) {
        console.log('member',member);
        return (
          <CharacterInfo
            key={'characterSheet_'+member._id}
            name={member.characterName}
            spells={member.spells}
            armor={member.armor}
            weapons={member.weapons}
            >
            </CharacterInfo>
        )
      })
    }
    return (
      <section>
        {this.props.dm ? <div>{member}</div> : null}
      </section>
    )
  }
}
