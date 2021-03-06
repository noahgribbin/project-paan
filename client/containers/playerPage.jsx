'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AnimateHeight from 'react-animate-height';

import store from '../store.js';

import { histroy } from '../entry.jsx';

import { CreateCharacterForm } from '../components/createCharacterForm.jsx';
import { CharacterList } from '../components/characterList.jsx';
import { Navbar } from '../components/navbar.jsx';

import { createCharacter, getAllCharacters, setCharacters, getCharacter, getAllWeapons, getAllSpells, getAllArmor } from '../actions/characterActions.js';

class PlayerPage extends React.Component {
  constructor(props) {
    super(props);
    console.log('PlayerPage', this);
    this.onInput=this.onInput.bind(this);
    this.createCharacter=this.createCharacter.bind(this);
    this.errorCheck=this.errorCheck.bind(this);
    this.resetCharacterState=this.resetCharacterState.bind(this);
    this.toggleHeight=this.toggleHeight.bind(this);
    this.closeFormOpenList=this.closeFormOpenList.bind(this);
    this.state = {
      characterName: '',
      race: '',
      class: '',
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
      raceError: false,
      classError: false,
      lvError: false,
      acError: false,
      hpError: false,
      strengthError: false,
      dexterityError: false,
      constitutionError: false,
      intelligenceError: false,
      wisdomError: false,
      charismaError: false,
      formHeight: 0,
      listHeight: 0
    }
  }

  componentWillMount(){
    if(this.props.characters.length === 0) {
      this.setState({formHeight:'auto'})
    }else {

      this.setState({listHeight:'auto'})
      console.log('Characters');
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
    var val = e.target.value
    if (val === undefined) val= e.target.getAttribute("value")
    var type = e.target.getAttribute('name')
    console.log('Val',val);
    this.setState({
      [type]: val
    })
    console.log(this.state);
  }

  resetCharacterState(){
    this.setState({
      characterName: '',
      race: '',
      class: '',
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
        race: this.state.race,
        class: this.state.class,
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
    const fields = ['characterName', 'race', 'class', 'lv','ac','hp','strength','dexterity','constitution','intelligence','wisdom','charisma'];
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

  toggleHeight(e){
    var height = e.target.getAttribute('name')
    var newHeight = this.state[height] === 0 ? 'auto' : 0;
    console.log(height);
    console.log(newHeight);
    this.setState(prevState => ({
      [height]: newHeight
    }))
    if(height==='formHeight'){
      this.setState({'listHeight':0})
    }else {
      this.setState({'formHeight':0})
    }
  }

  closeFormOpenList(){
    this.setState({ formHeight: 0})
    this.setState({ listHeight: 'auto'})
  }

  render() {
    return (
      <section>
        <Navbar />
      <section className="page-container">
        <div className="item-title-continer">
          <h1 className="item-section-title">Characters</h1>
          <span className="fa fa-plus right plus-form-toggle"
                onClick={this.toggleHeight}
                name="formHeight"></span>
          <span className={"fa fa-caret-down right plus-form-toggle " + (this.props.characters.length === 0 ? ' hide ' :null)}
                onClick={this.toggleHeight}
                name="listHeight"></span>
        </div>
        <AnimateHeight
          duration = {250}
          height = {this.state.formHeight}
        >
          <CreateCharacterForm
            onInput = {this.onInput}
            onSubmit = {this.createCharacter}
            race = {this.state.race}
            class = {this.state.class}
            onSubmit = {this.createCharacter}
            errorCheck = {this.errorCheck}
            characterNameError = {this.state.characterNameError}
            raceError = {this.state.raceError}
            classError = {this.state.classError}
            lvError = {this.state.lvError}
            acError = {this.state.acError}
            hpError = {this.state.hpError}
            strengthError = {this.state.strengthError}
            dexterityError = {this.state.dexterityError}
            constitutionError = {this.state.constitutionError}
            intelligenceError = {this.state.intelligenceError}
            wisdomError = {this.state.wisdomError}
            charismaError = {this.state.charismaError}
            createCharacterError = {this.state.createCharacterError}
            closeFormOpenList = {this.closeFormOpenList}
          />
        </AnimateHeight>

        <AnimateHeight
          duration = {250}
          height = {this.state.listHeight}
          >
          <CharacterList
            getCharacter={this.props.getCharacter}
            getAllArmor={this.props.getAllArmor}
            getAllSpells={this.props.getAllSpells}
            getAllWeapons={this.props.getAllWeapons}
            characters={this.props.characters}
            />
        </AnimateHeight>
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
