'use strict';

import React from 'react';

import { UpdateDmForm } from './updateDmForm.jsx'
import Transition from 'react-transition-group/Transition'



export class CampaignHeader extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    this.toggleShowUpdate = this.toggleShowUpdate.bind(this)
    this.toggleHideUpdate = this.toggleHideUpdate.bind(this)
    this.toggleSettings = this.toggleSettings.bind(this)
    this.state = {
      showUpdate: false,
      showSettings:false
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

  async toggleSettings(){
    console.log('showSet');
    await this.setState(prevState => ({
      showSettings:!prevState.showSettings
    }))
    console.log(this.state);
    if(this.state.showSettings===true){
      console.log("HIDDEN");
      document.body.style.overflow="hidden"
    }else {
      console.log("VISSS");
      document.body.style.overflow="visible"

    }
  }

  render() {
    return (
      <section className="campaign-header-section">
        <div className="campaign-header">

        <h1 className="campaign-header-title">{this.props.dm.campaignName}</h1>
        <span className="icon-plus"
              onClick={this.toggleSettings}></span>
        </div>

          <Transition in={this.state.showSettings}
            timeout={0}
            appear>
            {(state) => (
              console.log(state),
              <div className={`campaign-header-settings campaign-header-${state}`}>
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

            </div>
          )}
        </Transition>




      </section>
    )
  }
}
