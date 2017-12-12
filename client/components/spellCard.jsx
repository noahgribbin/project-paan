'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import AnimateHeight from 'react-animate-height';

export class SpellCard extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    this.toggleHeight=this.toggleHeight.bind(this)
    this.state = {
      listHeight: 0
    }
  }

  toggleHeight(e){
    var height = e.target.getAttribute('name')
    var newHeight = this.state[height] === 0 ? 'auto': 0;
    this.setState(prevState => ({[height]: newHeight}))
  }

  render() {
    return (
      <section>
        <li className= 'item-li'
            key={'spellLi_'+this.props.spell._id}
            name="listHeight"
            onClick={this.toggleHeight}>
              <div className="spell-label-container">
                <p className="spell-item-label">{this.props.spell.name}</p>
              </div>
        </li>
      <AnimateHeight
        duration={ 250 }
        height={this.state.listHeight}
        >
        <ul className="spell-info-container">
          <li className="spell-item-label">Casting time: {this.props.spell.castingTime}</li>
          <li className="spell-item-label">Range: {this.props.spell.range}</li>
          <li className="spell-item-label">Duration: {this.props.spell.duration}</li>
          <li className="spell-item-label">Components: {this.props.spell.components}</li>
          <li className="spell-item-label"> {this.props.spell.description}</li>
        </ul>
      </AnimateHeight>

      </section>
    )

  }
}
