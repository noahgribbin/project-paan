'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import AnimateHeight from 'react-animate-height';

import {SpellList} from './spellList.jsx'
import {CreateSpellForm} from './createSpellForm.jsx'

export class SpellSection extends React.Component {
  constructor(props){
    super(props)
    console.log(this);
    this.closeFormOpenList=this.closeFormOpenList.bind(this)
    this.toggleHeight=this.toggleHeight.bind(this)
    this.state = {
      showForm: false,
      formHeight: 0,
      listHeight: 0
    }
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
          <h1 className="item-section-title">Spells</h1>
          <span className="fa fa-plus right plus-form-toggle"
                onClick={this.toggleHeight}
                name="formHeight"></span>
          <span className={"fa fa-caret-down right plus-form-toggle " + (this.props.spells.length === 0 ? ' hide ' :null)}
                onClick={this.toggleHeight}
                name="listHeight"></span>
        </div>
        <AnimateHeight
           duration={ 250 }
           height={ this.state.formHeight } // see props documentation bellow
         >
        <CreateSpellForm
          onSubmit = {this.props.createSpell}
          onSpellNameInput = {this.props.onSpellNameInput}
          setSpellAttributes = {this.props.setSpellAttributes}
          closeFormOpenList = {this.closeFormOpenList}
        />
        </AnimateHeight>
        <AnimateHeight
           duration={ 250 }
           height={ this.state.listHeight } // see props documentation bellow
         >
          <SpellList
            deleteSpell ={this.props.deleteSpell}
            spells = {this.props.spells}
            onSubmit = {this.props.onSubmit}
            onInput = {this.props.onInput}
            onSpellNameInput = {this.props.onSpellNameInput}
            setSpellAttributes = {this.props.setSpellAttributes}
          />
        </AnimateHeight>


    </section>
    )
  }
}
