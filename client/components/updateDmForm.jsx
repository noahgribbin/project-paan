'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class UpdateDmForm extends React.Component {
  constructor(props) {
    super(props)
      console.log('updateDmForm',this.props);
      this.updateCampaign = this.props.updateCampaign.bind(this)
      this.updateCampaignName = this.props.updateCampaignName.bind(this)
      this.toggleHide = this.props.toggleHide.bind(this)
      this.stopPropagation = this.stopPropagation.bind(this)
      this.updateAndToggle = this.updateAndToggle.bind(this)
      this.onEscapeKey = this.onEscapeKey.bind(this)
      this.deepOnEscapeKey = this.deepOnEscapeKey.bind(this)
      this.state = {
        showUpdateModal: false
      }
  }

  stopPropagation(e) {
    e.stopPropagation()
  }

  updateAndToggle(e) {
    e.preventDefault()
    this.props.updateCampaign()
    this.toggleHide()
  }

  onEscapeKey(e) {
    console.log(e.keyCode);
    if(e.keyCode===27){

      this.props.toggleHide()
    }
  }
  deepOnEscapeKey(e) {
    console.log('hit');
    this.stopPropagation(e)
    this.onEscapeKey(e)
  }

  render() {
    return (
      <section className="update-weapon-form-shader"
               onClick={this.props.toggleHide}
               onKeyDown={this.onEscapeKey}
               tabIndex="0"
               >
        <div className="update-form-container">
        <form className='create-dm-form'
              onSubmit={this.updateAndToggle}
              onClick={this.stopPropagation}
                >
          <div className="create-dm-input-div">
            <input className="create-dm-input"

                   onChange={this.updateCampaignName}
                   placeholder={this.props.dm.campaignName}
                   onKeyDown={this.deepOnEscapeKey}
                   ></input>
          <button className="create-dm-button"
                  type="submit"
                  >Update</button>
          </div>
        </form>
      </div>
      </section>
    )
  }
}
