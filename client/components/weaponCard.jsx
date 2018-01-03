'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class WeaponCard extends React.Component {
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
            key={'spellLi_'+this.props.weapon._id}
            onClick={this.toggleShowInfo}>
              <div className="weapon-label-container">
                <p className="item-label">{this.props.weapon.name}</p>
                <p className="item-label">{this.props.weapon.dice}</p>
                <p className="item-label">{this.props.weapon.damage}</p>
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
