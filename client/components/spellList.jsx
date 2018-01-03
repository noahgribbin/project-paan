'use strict';

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import {UpdateSpellForm} from './updateSpellForm.jsx';
import {ToggleSpellUpdateFormButton} from './toggleSpellUpdateFormButton.jsx';
import {DeleteSpellButton} from './deleteSpellButton.jsx';
import {SpellItem} from './spellItem.jsx';

export class SpellList extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    this.deleteSpell = this.props.deleteSpell.bind(this);
    this.onSpellNameInput = this.props.onSpellNameInput.bind(this);
    this.onSubmit = this.props.onSubmit.bind(this);
    // this.spells = this.props.spells.bind(this);
    this.state = {
      isUpdating: false
    }
  }

  render() {
    if(this.props.spells){
    return (
      <section className="weapon-list-section">
        <ul>
          {this.props.spells.map((item, index)=>
            <SpellItem
              key={'spellItem'+item._id}
              spell={item}
              onSubmit={this.onSubmit}
              deleteSpell={this.deleteSpell}
              onSpellNameInput={this.onSpellNameInput}
              setSpellAttributes = {this.props.setSpellAttributes}
            />
          )}
        </ul>
      </section>
    )
    }else{
      return(
        <div></div>
      )
    }
  }
}
