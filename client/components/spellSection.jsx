'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import {SpellList} from './spellList.jsx'
import {CreateSpellForm} from './createSpellForm.jsx'

export class SpellSection extends React.Component {
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
          <h1 className="item-section-title">Spells</h1>
          <span className="fa fa-plus right plus-form-toggle"
                onClick={this.showForm}></span>
        </div>
        {this.state.showForm ?
        <CreateSpellForm
          onSubmit = {this.props.createSpell}
          onSpellNameInput = {this.props.onSpellNameInput}
          setSpellAttributes = {this.props.setSpellAttributes}
        />
        :null}
        <SpellList
          deleteSpell ={this.props.deleteSpell}
          spells = {this.props.spells}
          onSubmit = {this.props.onSubmit}
          onInput = {this.props.onInput}
          onSpellNameInput = {this.props.onSpellNameInput}
          setSpellAttributes = {this.props.setSpellAttributes}
        />

    </section>
    )
  }
}
