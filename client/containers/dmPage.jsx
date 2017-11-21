'use strict'

import React from 'react'
import { connect } from 'react-redux'

import store from '../store.js';

import { histroy } from '../entry.jsx';

import {CreateDmForm} from '../components/createDmForm.jsx';
import {DmList} from '../components/dmList.jsx';
import {Navbar} from '../components/navbar.jsx'


import { createDm, getAllDms, updateDm, deleteDm } from '../actions/dmActions.js';

class DmPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.onCampaignNameInput=this.onCampaignNameInput.bind(this);
    this.onClickDeleteDm = this.onClickDeleteDm.bind(this);
    this.onSubmiteUpdateDm = this.onSubmiteUpdateDm.bind(this);
    this.resetState = this.resetState.bind(this);

    console.log('DM PAGE PROPS', this.props);

    this.state = {
      campaignName: '',
    }
  }


  async componentDidMount(){
    console.log('didMount');
    var data = {
      token: this.props.token,
      id: this.props.profileID
    }
    await store.dispatch(getAllDms(data))
  }

resetState(){
  this.setState({campaignName:''})
}

onCampaignNameInput(e) {
  this.setState({
    campaignName: e.target.value
  });
  console.log(e.target.value);
}

async onClickDeleteDm() {
  const data = {
    id: store.getState().dmReducer.sessionDm,
    token: store.getState().userReducer.token
  }
  const allDmData = {
    id: store.getState().profileReducer.profileID,
    token: store.getState().userReducer.token
  }

  history.push('./dm')
  await store.dispatch(deleteDm(data))
  // await store.dispatch(getAllDms(allDmData))
      console.log('hi');
}

onSubmiteUpdateDm() {
  const data = {
    id: store.getState().dmReducer.sessionDm,
    token: store.getState().userReducer.token,
    body: {
      campaignName: store.getState().dmReducer.campaignName
    }
  }
  const allDmData = {
    id: store.getState().profileReducer.profileID,
    token: store.getState().userReducer.token
  }
  store.dispatch(updateDm(data))
  .then(() => {
    store.dispatch(getAllDms(allDmData))
  })
}

onSubmit(e) {
  // console.log(store.getState());
  e.preventDefault();
  const data = {
    dm: {campaignName: this.state.campaignName},
    token: store.getState().userReducer.token
  }
  const allDmData = {
    id: store.getState().profileReducer.profileID,
    token: store.getState().userReducer.token
  }
  store.dispatch(createDm(data))
  .then(() => {
    console.log('dm page state',this.state);
    if(this.props.duplicateError) return
    store.dispatch(getAllDms(allDmData))
    this.resetState()
  })
}

  render() {
    return (
      <section>
        <Navbar />
        <section className="page-container">

        <CreateDmForm
          onCampaignNameInput={this.onCampaignNameInput}
          onPasscodeInput={this.onPasscodeInput}
          onSubmit={this.onSubmit}
          duplicateError={this.props.duplicateError}
          campaignName={this.state.campaignName}
        />

        <DmList
          onClick={this.onClickAllDm}
          dms={this.props.dms}
        />
      </section>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state',state);
  return {
    token: state.userReducer.token,
    profileID: state.profileReducer.profileID,
    dms: state.dmReducer.dms,
    duplicateError: state.dmReducer.duplicateError
  }
}
const mapDispatchToProps = (dispatch) => {
  return  {
    // add props if needed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DmPage)
