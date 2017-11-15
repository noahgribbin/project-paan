'use strict'

import React from 'react'
import { connect } from 'react-redux'

import store from '../store.js';

import { histroy } from '../entry.jsx';

import {CreateDmForm} from '../components/createDmForm.jsx';
import {DmList} from '../components/dmList.jsx';

import { createDm, getAllDms, updateDm, deleteDm } from '../actions/dmActions.js';

class DmPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.onCampaignNameInput=this.onCampaignNameInput.bind(this);
    this.onClickAllDm= this.onClickAllDm.bind(this);

    this.onClickDeleteDm = this.onClickDeleteDm.bind(this);
    this.onSubmiteUpdateDm = this.onSubmiteUpdateDm.bind(this);

    console.log('DM PAGE PROPS', this.props);

    this.state = {
      campaignName: '',
      campaignCode: '',
      dms: []
    }
  }


  async componentDidMount(){
    console.log('didMount');
    var data = {
      token: this.props.token,
      id: this.props.profileID
    }
    await store.dispatch(getAllDms(data))
    // console.log('past get campaign members');
    // this.setState({
    //   campaign: this.props.dm
    // })
  }


onCampaignNameInput(e) {
  this.setState({
    campaignName: e.target.value
  });
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
  debugger
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
    dm: {
      campaignName: this.state.campaignName
      // campaignCode: this.state.campaignCode
    },
    token: store.getState().userReducer.token

  }
  const allDmData = {
    id: store.getState().profileReducer.profileID,
    token: store.getState().userReducer.token
  }
  console.log(store.getState().userReducer.token);
  store.dispatch(createDm(data))
  .then(() => {
    store.dispatch(getAllDms(allDmData))
  })
}


onClickAllDm(e) {
  e.preventDefault()
  const data = {
    id: store.getState().profileReducer.profileID,
    token: store.getState().userReducer.token
  }
  store.dispatch(getAllDms(data))
  .then((stuff) => {
    this.setState({dms: stuff.value.body.dms})
    console.log('this', this);
  })

  }


  render() {
    return (
      <section>
        <CreateDmForm
          onCampaignNameInput={this.onCampaignNameInput}
          onPasscodeInput={this.onPasscodeInput}
          onSubmit={this.onSubmit}
        />

        <DmList
          // if props.dms.length === 1
          //  render data
          onClick={this.onClickAllDm}
          dms={this.props.dms}
        />
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state',state);
  return {
    token: state.userReducer.token,
    profileID: state.profileReducer.profileID,
    dms: state.dmReducer.dms

  }
}
const mapDispatchToProps = (dispatch) => {
  return  {
    // add props if needed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DmPage)
