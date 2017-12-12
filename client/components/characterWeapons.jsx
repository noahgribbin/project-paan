'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import { WeaponCard } from './weaponCard.jsx'

export default  class CharacterWeapons extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    this.toggleShowInfo=this.toggleShowInfo.bind(this)
    this.state = {
    }
  }

  toggleShowInfo(){
    this.setState(prevState => ({
      showInfo:!prevState.showInfo
    }));
  }

  render() {
    if(this.props.character.weapons) {
        return(
          <section>
            <ul>
          {this.props.character.weapons.map((item, index) =>
              <WeaponCard
                toggleShowInfo={this.props.toggleShowInfo}
                weapon={item}
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

CharacterWeapons.propTypes = {
  character:  React.PropTypes.object.isRequired,
}
