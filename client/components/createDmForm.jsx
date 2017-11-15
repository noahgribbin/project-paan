'use strict'

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types'

export class CreateDmForm extends React.Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.props.onSubmit.bind(this);
    this.onCampaignNameInput = this.props.onCampaignNameInput.bind(this);
    this.submitAndClear = this.submitAndClear.bind(this);
  }

  submitAndClear(e){
    this.onSubmit(e)
    var form = document.getElementById("createDmForm");
    form.reset();
  }

  render() {
    return (
        <section className="create-dm-section">
          <h1 className="create-dm-title">Create a Campaign</h1>
          <form className="create-dm-form"
                onSubmit={this.onSubmit}
                id="createDmForm">
            <div className="create-dm-input-div">
              <input className="create-dm-input" onChange={this.onCampaignNameInput} type="text" name="name" placeholder="Campaign name" maxLength="20"></input>
            </div>
            <button className="create-dm-button" type="submit">Create</button>
          </form>
        </section>
    )
  }
}

CreateDmForm.propTypes = {

}
