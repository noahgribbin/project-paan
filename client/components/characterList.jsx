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
     this.characters = this.props.characters;
     this.makeUppercase = this.makeUppercase.bind(this);
   }


   componentDidMount() {
     console.log('componentDidMount');
     this.setState({characters: store.getState().characterReducer.weapons})
   }

   makeUppercase(str){
     var firstLetter = str.charAt(0).toUpperCase();
     var restOfString = str.slice(1);
     return firstLetter+restOfString
   }

   async toPlayerPage(e) {
     console.log(e.target);
     e.stopPropagation()
     var character = e.target.getAttribute("id");
     // var character = e.target;
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
     var makeUppercase = this.makeUppercase
     if(this.props.characters) {
       var character = this.props.characters.map(function(character) {
           return <li className='character-list-li'
                      key={character._id}
                      id={character._id}
                      onClick={toPlayerPage}>
                      <div className="list-title"
                           id={character._id}>
                        {character.characterName}
                      </div>
                      <div className="list-subtitle"
                           id={character._id}>
                        {makeUppercase(character.race) + ' ' + makeUppercase(character.class) +" ("+character.lv+")"}
                      </div>

                  </li>
         })
     }
     return (
       <section className="character-list-section">
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
