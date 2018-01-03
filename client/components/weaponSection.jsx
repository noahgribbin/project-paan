'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import {WeaponList} from './weaponList.jsx'
import {CreateWeaponForm} from './createWeaponForm.jsx'
import AnimateHeight from 'react-animate-height';


export class WeaponSection extends React.Component {
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
    console.log(newHeight);
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
          <h1 className="item-section-title">Weapons</h1>
          <span className="fa fa-plus right plus-form-toggle"
                onClick={this.toggleHeight}
                name="formHeight"></span>
          <span className={"fa right plus-form-toggle" + (this.props.weapons.length === 0 ? null : ' fa-caret-down ')}
                onClick={this.toggleHeight}
                name="listHeight"></span>
        </div>
        {/* {this.state.showForm ? */}
          <AnimateHeight
             duration={ 250 }
             height={ this.state.formHeight }
           >
        <CreateWeaponForm
          onSubmit = {this.props.createWeapon}
          toggleHeight = {this.toggleHeight}
          closeFormOpenList = {this.closeFormOpenList}
          onWeaponNameInput = {this.props.onWeaponNameInput}
          setWeaponAttributes = {this.props.setWeaponAttributes}
        />
      </AnimateHeight>
        <AnimateHeight
           duration={ 250 }
           height={ this.state.listHeight }
         >
          <WeaponList
            deleteWeapon ={this.props.deleteWeapon}
            weapons = {this.props.weapons}
            onSubmit = {this.props.onSubmit}
            onInput = {this.props.onInput}
            onWeaponNameInput = {this.props.onWeaponNameInput}
            setWeaponAttributes = {this.props.setWeaponAttributes}
          />
        </AnimateHeight>

    </section>
    )
  }
}
