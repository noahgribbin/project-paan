'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import store from '../store.js';

import { histroy } from '../entry.jsx';

import { CreateCharacterForm } from '../components/createCharacterForm.jsx';
import { CharacterList } from '../components/characterList.jsx';
import { Navbar } from '../components/navbar.jsx';

import { createCharacter, getAllCharacters, setCharacters, getCharacter, getAllWeapons, getAllSpells, getAllArmor } from '../actions/characterActions.js';
// import { getAllCharacters } from '../actions/characterActions.js';

class PlayerPage extends React.Component {
  constructor(props) {
    super(props);
    console.log('PlayerPage', this);
    this.onInput=this.onInput.bind(this);
    this.createCharacter=this.createCharacter.bind(this);
    this.errorCheck=this.errorCheck.bind(this);
    this.resetCharacterState=this.resetCharacterState.bind(this);
    this.state = {
      characterName: '',
      lv: '',
      ac: '',
      hp: '',
      strength: '',
      dexterity: '',
      constitution: '',
      intelligence: '',
      wisdom: '',
      charisma: '',
      characters: [],
      createCharacterError:false,
      characterNameError: false,
      lvError: false,
      acError: false,
      hpError: false,
      strengthError: false,
      dexterityError: false,
      constitutionError: false,
      intelligenceError: false,
      wisdomError: false,
      charismaError: false
    }
  }

  async errorCheck(fields){
    var errArr = []
    function isTrue(element) {
      return element === true;
    }

    for (var i = 0; i < fields.length; i++) {
      var error = fields[i]+'Error'
      if(this.state[fields[i]] ===''){
        await this.setState({
          [error]: true
        })
        errArr.push(true)
      }else {
        await this.setState({
          [error]: false
        })
        errArr.push(false)
      }
    }
    if(errArr.some(isTrue)===true){
      this.setState({createCharacterError:true})
    }else {
      this.setState({createCharacterError:false})
    }
  }

  onInput(e) {
    console.log('E.target',e.target);
    var type = e.target.getAttribute('name')
    this.setState({
      [type]: e.target.value
    })
    console.log(this.state);
  }

  resetCharacterState(){
    this.setState({
      characterName: '',
      lv: '',
      ac: '',
      hp: '',
      strength: '',
      dexterity: '',
      constitution: '',
      intelligence: '',
      wisdom: '',
      charisma: '',
      characters: [],
      createCharacterError:false,
      characterNameError: false,
      lvError: false,
      acError: false,
      hpError: false,
      strengthError: false,
      dexterityError: false,
      constitutionError: false,
      intelligenceError: false,
      wisdomError: false,
      charismaError: false
    })
  }

async createCharacter(e) {
    e.preventDefault();
    const data = {
      character: {
        characterName: this.state.characterName,
        lv: this.state.lv,
        ac: this.state.ac,
        hp: this.state.hp,
        strength: this.state.strength,
        dexterity: this.state.dexterity,
        constitution: this.state.constitution,
        intelligence: this.state.intelligence,
        wisdom: this.state.wisdom,
        charisma: this.state.charisma
      },
      token: store.getState().userReducer.token
    }
    const allCharacterData = {
      id: store.getState().profileReducer.profileID,
      token: store.getState().userReducer.token
    }
    const fields = ['characterName','lv','ac','hp','strength','dexterity','constitution','intelligence','wisdom','charisma'];
    await this.errorCheck(fields)
    if(this.state.createCharacterError) return
    console.log('shouldnt get here if errorcheck returns true');
    store.dispatch(createCharacter(data))
    .then(() => {
      store.dispatch(getAllCharacters(allCharacterData))
      this.resetCharacterState()
      var form = document.getElementById("createCharacterForm");
      form.reset();
    })
  }


  render() {
    return (
      <section>
        <Navbar />
      <section className="page-container">
        <CreateCharacterForm
          onInput={this.onInput}
          onSubmit={this.createCharacter}
          errorCheck={this.errorCheck}
          characterNameError= {this.state.characterNameError}
          lvError= {this.state.lvError}
          acError= {this.state.acError}
          hpError= {this.state.hpError}
          strengthError= {this.state.strengthError}
          dexterityError= {this.state.dexterityError}
          constitutionError= {this.state.constitutionError}
          intelligenceError= {this.state.intelligenceError}
          wisdomError= {this.state.wisdomError}
          charismaError= {this.state.charismaError}
          createCharacterError={this.state.createCharacterError}
        />

        <CharacterList
          getCharacter={this.props.getCharacter}
          getAllArmor={this.props.getAllArmor}
          getAllSpells={this.props.getAllSpells}
          getAllWeapons={this.props.getAllWeapons}
          characters={this.props.characters}
          />
      </section>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state',state);
  return {
    characters: state.characterReducer.characters
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCharacter: getCharacter,
    getAllArmor: getAllArmor,
    getAllSpells: getAllSpells,
    getAllWeapons: getAllWeapons
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage)
