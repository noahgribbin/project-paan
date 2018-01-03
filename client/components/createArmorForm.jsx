'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class CreateArmorForm extends React.Component {
  constructor(props) {
    super(props)
    this.onArmorNameInput = this.props.onArmorNameInput.bind(this);
    this.onSubmit = this.props.onSubmit.bind(this);
    this.closeFormOpenList = this.props.closeFormOpenList.bind(this);
    this.submitAndClear = this.submitAndClear.bind(this);
    this.onChange = this.onChange.bind(this);
    this.errorCheck = this.errorCheck.bind(this);
    this.resetState = this.resetState.bind(this);
    this.state={
      armorName: '',
      armorNameError: false,
      showErrors: false
    }
  }

  async submitAndClear(e){
    e.preventDefault();
    this.setState({showErrors:true})
    await this.errorCheck()
    if(this.state.armorNameError) return
    this.onSubmit(e)
    this.closeFormOpenList()
    this.resetState()
    var form = document.getElementById("createArmorForm");
    form.reset();
  }

  async onChange(e){
    console.log(e.target.value);
    const E = e.target.value;
    await this.setState({armorName:E});
    await this.errorCheck()
    this.onArmorNameInput(E);
  }

  errorCheck(){
    if(this.state.armorName===''){
      this.setState({armorNameError:true})
    }else {
      this.setState({armorNameError:false})
    }
  }

  resetState(){
    this.setState({
      armorName:'',
      armorNameError:false
    })
  }

  render() {
    return (
      <section className="create-item-section">
        <h1 className="create-item-title">Add armor</h1>
        <form className="create-item-form "
              onSubmit={this.submitAndClear}
              id="createArmorForm">
          <div className="create-item-input-div">
            <input className={"create-item-input "+(this.state.showErrors && this.state.armorNameError ? 'input-error' :null)}
                   onChange={this.onChange}
                   placeholder="armor name"></input>
          </div>
          <button className="create-item-button">Create</button>
        </form>
      </section>
    )
  }
}


CreateArmorForm.propTypes = {
  onWeaponNameInput: React.PropTypes.func,
  onSubmit: React.PropTypes.func
}
