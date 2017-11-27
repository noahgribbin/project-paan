'use strict'

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import ReactSvg from 'react-svg';
import Transition from 'react-transition-group/Transition'

const TransitionForm = ({ in: inProp, localState, submitAndClear, onInput }) => (
  <Transition in={inProp}
    timeout={0}
    appear>
    {(state) => (
      <form className={`create-dm-form dropdown-form-${state}`}
            onSubmit={submitAndClear}
            id="createDmForm">
            {localState.createDmError && localState.showErrors ? <p className="input-error-message">please name your campaign</p>:null}
        <div className="create-dm-input-div">
          <input className={"create-dm-input " + (localState.showErrors && localState.createDmError || localState.duplicateError ? ' input-error ' :null)}
                 onChange={onInput}
                 type="text"
                 name="name"
                 placeholder="Campaign name"
                 maxLength="20"></input>
        </div>
        <button className="create-dm-button" type="submit">Create</button>
      </form>
    )}
  </Transition>
);

export class CreateDmForm extends React.Component {

  constructor(props) {
    super(props)
    console.log(this);
    this.onSubmit = this.props.onSubmit.bind(this);
    this.onCampaignNameInput = this.props.onCampaignNameInput.bind(this);
    this.submitAndClear = this.submitAndClear.bind(this);
    this.errorCheck = this.errorCheck.bind(this);
    this.resetState = this.resetState.bind(this);
    this.onInput = this.onInput.bind(this);
    this.toggleCreateForm = this.toggleCreateForm.bind(this);
    this.state = {
      showErrors: false,
      createDmError: false,
      campaignName: '',
      campaignNameError: false,
      showCreateDmForm: false
    }
  }


  async submitAndClear(e){
    e.preventDefault()
    var fields = ['campaignName']
    this.setState({showErrors:true})
    await this.errorCheck(fields)
    if(this.state.createDmError) return
    await this.onSubmit(e)
    this.setState({showErrors:false})
    this.resetState()
    var form = document.getElementById("createDmForm");
    form.reset();
  }

  errorCheck(fields){
    var errArr = []
    function isTrue(ele) {
      return ele === true;
    }
    for (var i = 0; i < fields.length; i++) {
      var error = fields[i]+'Error'
      if(this.props[fields[i]]===''){
        errArr.push(true)
        this.setState({duplicateError: false})
        this.setState({[error]:true})
      }else {
      errArr.push(false)
      this.setState({[error]:false})
      }
    if(errArr.some(isTrue)){
      this.setState({createDmError: true})
    }else {
      this.setState({createDmError: false})
    }
  }
}

resetState(){
  this.setState({
    showErrors: false,
    createDmError: false,
    campaignName: '',
    campaignNameError: false
  })
}

async onInput(e){
  var fields=['campaignName'];
  this.setState({duplicateError: false})
  await this.onCampaignNameInput(e)
  await this.errorCheck(fields);
}

toggleCreateForm(){
  this.setState(prevState => ({
    showCreateDmForm: !prevState.showCreateDmForm
  }))
  console.log(this.state);
}

  render() {
    return (
        <section className="create-dm-section">
          <div className="title-icon-container">
          {this.props.dms.length===0 ? <h1 className="create-dm-title">Create a Campaign</h1> :null}
          {this.props.dms.length!==0 ? <h1 className="create-dm-title">New Campaign</h1> :null}
              {/* {!this.state.showCreateDmForm ? <span className="icon-plus plus-dropdown"
                    onClick={this.toggleCreateForm}></span> :null}
              {this.state.showCreateDmForm ? <span className="icon-minus plus-dropdown"
                    onClick={this.toggleCreateForm}></span> :null} */}

          </div>
         <form className="create-dm-form"
               onSubmit={this.submitAndClear}
               id="createDmForm">
               {this.state.createDmError && this.state.showErrors ? <p className="input-error-message">please name your campaign</p>:null}
           <div className="create-dm-input-div">
             <input className={"create-dm-input " + (this.state.showErrors && this.state.createDmError || this.state.duplicateError ? ' input-error ' :null)}
                    onChange={this.onInput}
                    type="text"
                    name="name"
                    placeholder="Campaign name"
                    maxLength="20"></input>
             <button className="create-dm-button icon-plus" type="submit"></button>
           </div>
         </form>
          {/* <TransitionForm in={this.state.showCreateDmForm} localState={this.state} submitAndClear={this.submitAndClear} onInput={this.onInput}/> */}
        </section>
    )
  }
}

CreateDmForm.propTypes = {

}
