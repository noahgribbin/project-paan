'use strict';

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import {UpdateArmorForm} from './updateArmorForm.jsx';
import {ToggleArmorUpdateFormButton} from './toggleArmorUpdateFormButton.jsx';
import {DeleteArmorButton} from './deleteArmorButton.jsx';
import {ArmorItem} from './armorItem.jsx';

export class ArmorList extends React.Component {
  constructor(props) {
    super(props)
    console.log('ARMOR LIST}|{}|{}|}{|}{|}{|}{}',this.props);
    this.onSubmit = this.props.onSubmit.bind(this)
    this.onArmorNameInput = this.props.onArmorNameInput.bind(this)
    this.deleteArmor = this.props.deleteArmor.bind(this)

    this.state = {
    }
  }

  render() {
    if(this.props.armor){
    return (
      <section className="weapon-list-section">
        <ul>
          {this.props.armor.map((item, index)=>
            <ArmorItem
              key={'armorItem'+item._id}
              armor={item}
              onSubmit={this.onSubmit}
              deleteArmor={this.deleteArmor}
              onArmorNameInput={this.onArmorNameInput}
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
