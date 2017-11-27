'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class SpellCard extends React.Component {
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
            key={'spellLi_'+this.props.spell._id}
            onClick={this.toggleShowInfo}>
              <div className="spell-label-container">
                <p className="spell-item-label">{this.props.spell.name}</p>
              </div>
        </li>
        { this.state.showInfo ?
        <div className="spell-info-container">
          <p className="spell-item-label">Casting time: {this.props.spell.castingTime}</p>
          <p className="spell-item-label">Range: {this.props.spell.range}</p>
          <p className="spell-item-label">Duration: {this.props.spell.duration}</p>
          <p className="spell-item-label">Components: {this.props.spell.components}</p>
          <p className="spell-item-label"> {this.props.spell.description}</p>
        </div>
        :null }
      </section>
    )

  }
}
