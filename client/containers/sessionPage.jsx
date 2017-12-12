'use strict';

import React from 'react';
import { connect } from  'react-redux';
import store from '../store.js';
import AnimateHeight from 'react-animate-height';

import { history } from '../entry.jsx';
import CharacterStats from '../components/characterStats.jsx'
import CharacterWeapons from '../components/characterWeapons.jsx'
import CharacterSpells from '../components/characterSpells.jsx'
import CharacterArmor from '../components/characterArmor.jsx'
import SpellSection from '../components/spellSection.jsx'
import { Navbar } from '../components/navbar.jsx'

class SessionPage extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    this.toggleHeight = this.toggleHeight.bind(this);
    this.state = {
      weaponHeight: 0,
      armorHeight: 0,
      spellHeight: 0
    }
  }

  toggleHeight(e){
    var height = e.target.getAttribute('name')
    var newHeight = this.state[height] === 0 ? 'auto': 0;
    if(!this.state[height]){
      newHeight = 'auto'
    }
    console.log(newHeight);
    this.setState(prevState => ({
      [height]: newHeight
    }))
    // if(height==='formHeight'){
    //   this.setState({ listHeight: 0})
    // }else{
    //   this.setState({ formHeight: 0})
    // }
  }

  render() {
    var self = this;
    var state = this.state
    var campaignMember = this.props.dm.campaignMembers.map(function(member) {
      console.log(state)
      return(
        <section>
          <CharacterStats
            key={'CharacterStats_'+member._id}
            character= {member}
            hideCharacterManagment={true}
          />


          {member.spells.length !== 0 ?
          <section>
          <div className="item-title-continer">
            <h1 className="item-section-title">Spells</h1>
            <span className={"fa fa-caret-down right plus-form-toggle " }
                  onClick={self.toggleHeight}
                  name={"spellHeight"+member._id}></span>
          </div>
          <AnimateHeight
             duration={ 250 }
             height={ state["spellHeight"+member._id] ? state["spellHeight"+member._id] : 0 } // see props documentation bellow
           >
          <CharacterSpells
            key={'characterSpell_'+member._id}
            character= {member}/>
          </AnimateHeight>
        </section>
        :null}


          {member.weapons.length !== 0 ?
          <section>
          <div className="item-title-continer">
            <h1 className="item-section-title">Weapons</h1>
            <span className={"fa fa-caret-down right plus-form-toggle " }
                onClick={self.toggleHeight}
                name={"weaponHeight"+member._id}></span>
          </div>
          <AnimateHeight
            duration={ 250 }
            height={ state["weaponHeight"+member._id] ? state["weaponHeight"+member._id] : 0 } // see props documentation bellow
            >
            <CharacterWeapons
              key={'characterWeapons_'+member._id}
              character= {member}/>
          </AnimateHeight>
        </section>
        :null}


          {member.armor.length !== 0 ?
          <section>
          <div className="item-title-continer">
            <h1 className="item-section-title">Armor</h1>
              <span className={"fa fa-caret-down right plus-form-toggle " }
                onClick={self.toggleHeight}
                name={"armorHeight"+member._id}></span>
          </div>
          <AnimateHeight
            duration={ 250 }
            height={ state["armorHeight"+member._id] ? state["armorHeight"+member._id] : 0 } // see props documentation bellow
            >
          <CharacterArmor
            key={'characterArmor_'+member._id}
            character= {member}/>
          </AnimateHeight>
        </section>
        :null}


        </section>
      )
    })
    return (
      <section>
        <Navbar />
            <section className="page-container">
          {campaignMember}
        </section>
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
