'use strict';

import React from 'react';
import { connect } from  'react-redux';

import store from '../store.js';

import { history } from '../entry.jsx';
import CharacterStats from '../components/characterStats.jsx'
import CharacterWeapons from '../components/characterWeapons.jsx'
import CharacterSpells from '../components/characterSpells.jsx'
import CharacterArmor from '../components/characterArmor.jsx'
import { Navbar } from '../components/navbar.jsx'

class SessionPage extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
  }

  render() {
    var campaignMember = this.props.dm.campaignMembers.map(function(member) {
      return(
        <section>
          <Navbar />
          <section className="page-container">
          <CharacterStats
            key={'CharacterStats_'+member._id}
            character= {member}
          />
          <CharacterSpells
            key={'characterSpell_'+member._id}
            character= {member}/>
          <CharacterWeapons
            key={'characterWeapons_'+member._id}
            character= {member}/>
          <CharacterArmor
            key={'characterArmor_'+member._id}
            character= {member}/>
          </section>
        </section>
      )
    })
    return (
      <section>
          {campaignMember}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state',state);
  return {
    dm: state.characterReducer.campaign
  }
}
const mapDispatchToProps = (dispatch) => {
  return  {
    // add props if needed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionPage)
