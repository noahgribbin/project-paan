'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import AnimateHeight from 'react-animate-height';

import {ArmorList} from './armorList.jsx'
import {CreateArmorForm} from './createArmorForm.jsx'

export class ArmorSection extends React.Component {
  constructor(props){
    super(props)
    console.log(this);
    this.showForm=this.showForm.bind(this)
    this.toggleHeight=this.toggleHeight.bind(this)
    this.closeFormOpenList=this.closeFormOpenList.bind(this)
    this.state = {
      showForm: false,
      formHeight: 0,
      listHeight: 0
    }
  }

  showForm(){
    console.log(1);
    this.setState(prevState =>({
      showForm: !prevState.showForm
    }))
  }

  toggleHeight(e){
    var height = e.target.getAttribute('name')
    var newHeight = this.state[height] === 0 ? 'auto': 0;
    this.setState(prevState => ({
      [height]: newHeight
    }))
    if(height==='formHeight'){
      this.setState({ listHeight: 0})
    }else{
      this.setState({ formHeight: 0})
    }
  }

  closeFormOpenList(){
    this.setState({ formHeight: 0})
    this.setState({ listHeight: 'auto'})
  }

  render() {
    return(
      <section>
        <div className="item-title-continer">
          <h1 className="item-section-title">Armor</h1>
          <span className="fa fa-plus right plus-form-toggle"
                onClick={this.toggleHeight}
                name="formHeight"></span>
          <span className={"fa fa-caret-down right plus-form-toggle " + (this.props.armor.length === 0 ? ' hide ' :null)}
                onClick={this.toggleHeight}
                name="listHeight"></span>
        </div>
        <AnimateHeight
           duration={ 250 }
           height={ this.state.formHeight } // see props documentation bellow
         >
          <CreateArmorForm
            onSubmit = {this.props.createArmor}
            onArmorNameInput = {this.props.onArmorNameInput}
            showForm = {this.showForm}
            closeFormOpenList= {this.closeFormOpenList}
          />
        </AnimateHeight>

        <AnimateHeight
           duration={ 250 }
           height={ this.state.listHeight } // see props documentation bellow
         >
          <ArmorList
            deleteArmor ={this.props.deleteArmor}
            armor = {this.props.armor}
            onSubmit = {this.props.onSubmit}
            onArmorNameInput = {this.props.onArmorNameInput}
          />
      </AnimateHeight>


    </section>
    )
  }
}
