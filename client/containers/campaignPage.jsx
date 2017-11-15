'use strict';

import React from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';

import store from '../store.js';

import { history } from '../entry.jsx';

import  CharacterStats  from '../components/characterStats.jsx'
import CharacterSpells from '../components/characterSpells.jsx'
import CharacterWeapons from '../components/characterWeapons.jsx'
import CharacterArmor from '../components/characterArmor.jsx'

import { CampaignHeader } from '../components/campaignHeader.jsx'

import { deleteDm, updateDm, setCampaignName, getDm, getCampaignMembers } from '../actions/dmActions.js';



class CampaignPage extends React.Component {
  constructor(props) {
    super(props)
    this.deleteCampaign = this.deleteCampaign.bind(this);
    this.updateCampaign = this.updateCampaign.bind(this);
    this.onCampaignNameinput = this.onCampaignNameinput.bind(this);
  }

  async componentDidMount(){
    console.log('didMount');
    var data = {
      token: this.props.token,
      id: this.props.id
    }
    await store.dispatch(getDm(data))
    await store.dispatch(getCampaignMembers(data))
    // console.log('past get campaign members');
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
    // debugger
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
    await store.dispatch(updateDm(updateData))
    await store.dispatch(getDm(getData))
    await store.dispatch(getCampaignMembers(getData))
  }

  onCampaignNameinput(e) {
    store.dispatch(setCampaignName(e.target.value))
  }

  render() {
    if(this.props.dm.campaignMembers.length!==0){
      console.log('HEYYYYYYY', this.props.dm.campaignMembers);
      var member = this.props.dm.campaignMembers.map(function(member) {
        console.log(member);
        return (
          <section
              key={member._id}>

          <CharacterStats
            key={'characterStats_'+member.id}
            character={member}
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
        )
      })
    }
      return (
        <section>
          <CampaignHeader
            updateCampaign={this.updateCampaign}
            deleteCampaign={this.deleteCampaign}
            updateCampaignName ={this.onCampaignNameinput}
            dm={this.props.dm}
          />
          {member}
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
