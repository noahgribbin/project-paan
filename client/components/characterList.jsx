'use strict';

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import store from '../store.js';
import { history } from '../entry.jsx';
import { getAllCharacters , setSessionCharacter, getCharacter, getAllWeapons, setWeapons, getAllArmor, setArmor, getAllSpells, setSpells } from '../actions/characterActions.js';

export class CharacterList extends React.Component {
   constructor(props) {
     super(props)
     console.log(this);
     this.toPlayerPage = this.toPlayerPage.bind(this);
     this.characters = this.props.characters
   }


   componentDidMount() {
     console.log('componentDidMount');
     this.setState({characters: store.getState().characterReducer.weapons})
   }


   async toPlayerPage(e) {
     var character = e.target.getAttribute('id');
     console.log('character', character);
     store.dispatch(setSessionCharacter(character))
     var data = {
       id: character,
       token: store.getState().userReducer.token
     }

       await this.props.getAllWeapons(data)
       await this.props.getAllSpells(data)
       await this.props.getAllArmor(data)
       await this.props.getCharacter(data)
     .then(() => {
        console.log("character reducer", store.getState().characterReducer)
        history.push('character')
      })
   }

   render() {
     var toPlayerPage = this.toPlayerPage
     if(this.props.characters) {
       var character = this.props.characters.map(function(character) {
           return <li className='character-list-li'
                      key={character._id}
                      id={character._id}
                      onClick={toPlayerPage}>
                      {character.characterName}
                  </li>
         })
     }
     return (
       <section>
         <h1 className="character-list-title">Character List</h1>
         {this.props.characters ? <ul>{character}</ul> : null}
       </section>
     )
   }
}

CharacterList.propTypes = {
  onClick:         React.PropTypes.func,
  toPlayerPage:         React.PropTypes.func,
  characters:      React.PropTypes.array
}

const mapStateToProps = (state) => {
  console.log('state',state);
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return  {
    // Propperly write dispatch functions in container, and pass down via props
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)
