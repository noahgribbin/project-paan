'use strict';

import React from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import store from '../store.js';
import AnimateHeight from 'react-animate-height';
import { history } from '../entry.jsx';
import  CharacterStats  from '../components/characterStats.jsx'
import CharacterSpells from '../components/characterSpells.jsx'
import CharacterWeapons from '../components/characterWeapons.jsx'
import CharacterArmor from '../components/characterArmor.jsx'
import { Navbar } from '../components/navbar.jsx'
import { CampaignHeader } from '../components/campaignHeader.jsx'
import { deleteDm, updateDm, setCampaignName, getDm, getCampaignMembers } from '../actions/dmActions.js';

class CampaignPage extends React.Component {
  constructor(props) {
    super(props)
    this.deleteCampaign = this.deleteCampaign.bind(this);
    this.updateCampaign = this.updateCampaign.bind(this);
    this.onCampaignNameinput = this.onCampaignNameinput.bind(this);
    this.toggleHeight = this.toggleHeight.bind(this);
    this.state = {

    }
  }

  async componentDidMount(){
    console.log('didMount');
    var data = {
      token: this.props.token,
      id: this.props.id
    }
    await store.dispatch(getDm(data))
    await store.dispatch(getCampaignMembers(data))
    this.setState({
      campaign: this.props.dm
    })
  }

  deleteCampaign() {
    const data = {
      id: this.props.id,
      token: this.props.token
    }
    this.props.deleteCampaign(data)
    history.push('./dm')

  }

  async updateCampaign() {
    const updateData = {
      id: this.props.id,
      token: this.props.token,
      body: {
        campaignName: this.props.campaignName
        // TODO: fix body
      }
    }
    const getData = {
      id: this.props.id,
      token: this.props.token
    }
    if(this.props.campaignName==='')return
    await store.dispatch(updateDm(updateData))
    await store.dispatch(getDm(getData))
    await store.dispatch(getCampaignMembers(getData))
  }

  onCampaignNameinput(e) {
    store.dispatch(setCampaignName(e.target.value))
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
  }

  render() {
    var self = this;
    var state = this.state
    if(this.props.dm.campaignMembers.length!==0){
      var member = this.props.dm.campaignMembers.map(function(member) {
        console.log('MEMBER!!!',member);
        return (
          <section
              key={member._id}>

          <CharacterStats
            key={'characterStats_'+member.id}
            character={member}
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
    }
      return (
        <section>
          <Navbar />
          <section className="page-container">
          <CampaignHeader
            updateCampaign={this.updateCampaign}
            deleteCampaign={this.deleteCampaign}
            updateCampaignName ={this.onCampaignNameinput}
            dm={this.props.dm}
          />
          {member}
        </section>
        </section>
      )
  }
}


const mapStateToProps = (state) => {
  console.log('CAMPAIGN PAGE state',state);
  return {
    dm: state.dmReducer.campaign,
    campaignName: state.dmReducer.campaignName,
    id: state.dmReducer.sessionDm,
    token: state.userReducer.token
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteCampaign: deleteDm,
    updateCampaign: updateDm,
    updateCampaignName: setCampaignName,
    getDm: getDm,
    getCampaignMembers: getCampaignMembers
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignPage)
