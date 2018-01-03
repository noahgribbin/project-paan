'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import { ArmorCard } from './armorCard.jsx'

export default class CharacterArmor extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
  }

  render() {
    if(this.props.character.armor) {
        return(
          <section>
            <ul>
          {this.props.character.armor.map((item, index) =>
              <ArmorCard
                toggleShowInfo={this.props.toggleShowInfo}
                armor={item}
                key={"armorCard_"+item._id}
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
CharacterArmor.propTypes = {
  character:  React.PropTypes.object.isRequired,
}
