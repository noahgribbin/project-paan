'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class ArmorCard extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    this.toggleShowInfo=this.toggleShowInfo.bind(this)
    this.state = {
      showInfo:false
    }
  }

  toggleShowInfo(){
    this.setState(prevState => ({
      showInfo:!prevState.showInfo
    }));
  }

  render() {
    return (
      <section>
        <li className= 'item-li'
            key={'armorLi_'+this.props.armor._id}
            onClick={this.toggleShowInfo}>
              <div className="weapon-label-container">
                <p className="item-label weapon-item">{this.props.armor.name}</p>
              </div>
        </li>
        { this.state.showInfo ?
        <div className="weapon-info-container">

        </div>
        :null }
      </section>
    )

  }
}
