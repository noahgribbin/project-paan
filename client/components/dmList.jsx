'use strict';

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import store from '../store.js';
import { history } from '../entry.jsx';
import { getDm, getAllDm , setSessionDm, setCampaignName, getCampaignMembers } from '../actions/dmActions.js';

export class DmList extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    this.toCharacterSheets = this.toCharacterSheets.bind(this);
  }

  // move to container
  async toCharacterSheets(e) {
    console.log('here');
    var dmId = e.target.getAttribute('id');
    var dmName = e.target.getAttribute('name');
    var data =  {
      token: store.getState().userReducer.token,
      id:    dmId
    }
    await( store.dispatch(setSessionDm(dmId)),
           store.dispatch(setCampaignName(dmName)),
           store.dispatch(getDm(data)),
           store.dispatch(getCampaignMembers(data))
    )
    .then(() => {
      history.push('dmParty')
    })
  }

  render() {
    var toCharacterSheets = this.toCharacterSheets
    if(this.props.dms) {
    var dmInstance = this.props.dms.map(function(dm) {
      return <li className="dm-list-li"
                 key={dm._id} id={dm._id}
                 name={dm.campaignName}
                 onClick={toCharacterSheets}
                >
                {dm.campaignName }
            </li>
    })
  }
    return (
      <section>
        {this.props.dms.length > 0 ? <h1 className="dm-list-title">Campaign List</h1> :null}
        {this.props.dms ? <ul>{dmInstance}</ul> :null}
      </section>
    )
  }
}

DmList.propTypes = {
  onClick:  React.PropTypes.func,
  // dms:      React.PropTypes.array
}

const mapStateToProps = (state) => {
  console.log('state',state);
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return  {
    // add props if needed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DmList)
