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

  // componentDidMount(){
  //   document.getElementById("update-weapon-form-shader-"+this.props.dm._id).focus()
  // }


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
              //  id={"update-weapon-form-shader-"+this.props.dm._id}
               onClick={this.props.toggleHide}
               onKeyDown={this.onEscapeKey}
               tabIndex="0"
               >
        <form className='update-weapon-form'
              onSubmit={this.updateAndToggle}
              // id={this.props.dm._id}
              onClick={this.stopPropagation}
                >
          <div className="update-weapon-form-input-div">
            <input className="update-weapon-form-input"
                   onChange={this.updateCampaignName}
                  //  placeholder={this.props.dm.campaignName}
                   onKeyDown={this.deepOnEscapeKey}
                   ></input>
          </div>
          <button className="update-weapon-form-button"
                  type="submit"
                  >Update</button>
        </form>
      </section>
    )
  }
}
