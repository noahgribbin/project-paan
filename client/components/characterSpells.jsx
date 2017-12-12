'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import { SpellCard } from './spellCard.jsx'

export default class CharacterSpells extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
  }

  render() {
    if(this.props.character.spells) {
        return(
          <section>
            <ul>
          {this.props.character.spells.map((item, index) =>
              <SpellCard
                toggleShowInfo={this.props.toggleShowInfo}
                spell={item}
                key={"spellCard_"+item._id}
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
CharacterSpells.propTypes = {
  character:  React.PropTypes.object.isRequired,
}
