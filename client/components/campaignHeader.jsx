'use strict';

import React from 'react';

import { UpdateDmForm } from './updateDmForm.jsx'


export class CampaignHeader extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    this.toggleShowUpdate = this.toggleShowUpdate.bind(this)
    this.toggleHideUpdate = this.toggleHideUpdate.bind(this)
    this.state = {
      showUpdate: false
    }
  }

  toggleHideUpdate() {
    this.setState(prevState => ({
      showUpdate: !prevState.showUpdate
    }))
    document.body.style.overflow="hidden"
  }
  toggleShowUpdate() {
    this.setState(prevState => ({
      showUpdate: !prevState.showUpdate
    }))
    document.body.style.overflow="visible"
  }

  render() {
    return (
      <section>
        <h1 className="campaign-header-title">{this.props.dm.campaignName}</h1>
        <h1 className="campaign-header-title">{this.props.dm.campaignCode}</h1>
        <button onClick={this.props.deleteCampaign}> delete campaign</button>
        <button onClick={this.toggleShowUpdate}>update campaign</button>
        { this.state.showUpdate ?
          <UpdateDmForm
            updateCampaign = {this.props.updateCampaign}
            toggleHide={this.toggleHideUpdate}
            updateCampaignName={this.props.updateCampaignName}
            // campaignName={this.props.dm.campaignName}
            dm={this.props.dm}
        /> :null}
      </section>
    )
  }
}
