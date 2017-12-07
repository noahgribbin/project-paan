'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import {ArmorList} from './armorList.jsx'
import {CreateArmorForm} from './createArmorForm.jsx'

export class ArmorSection extends React.Component {
  constructor(props){
    super(props)
    console.log(this);
    this.showForm=this.showForm.bind(this)
    this.state = {
      showForm: false
    }
  }

  showForm(){
    console.log(1);
    this.setState(prevState =>({
      showForm: !prevState.showForm
    }))
  }

  render() {
    return(
      <section>
        <div className="item-title-continer">
          <h1 className="item-section-title">Armor</h1>
          <span className="fa fa-plus right plus-form-toggle"
                onClick={this.showForm}></span>
        </div>
        {this.state.showForm ?
        <CreateArmorForm
          onSubmit = {this.props.createArmor}
          onArmorNameInput = {this.props.onArmorNameInput}
        />
        :null}
        <ArmorList
          deleteArmor ={this.props.deleteArmor}
          armor = {this.props.armor}
          onSubmit = {this.props.onSubmit}
          onArmorNameInput = {this.props.onArmorNameInput}
        />

    </section>
    )
  }
}
