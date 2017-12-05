'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import store from '../store.js';

export class UpdateCharacterForm extends React.Component {
  constructor(props) {
    super(props)
      console.log('updateCharacterForm',this);
      this.updateCharacterAttribute = this.updateCharacterAttribute.bind(this)
      this.toggleHide = this.props.toggleHide.bind(this)
      this.updateAndToggle = this.updateAndToggle.bind(this)
      this.onEscapeKey = this.onEscapeKey.bind(this)
      this.deepOnEscapeKey = this.deepOnEscapeKey.bind(this)
      this.stopPropagation = this.props.stopPropagation.bind(this)
      this.closeSelect = this.closeSelect.bind(this)
      this.makeUppercase = this.makeUppercase.bind(this)
      this.changeAndClose = this.changeAndClose.bind(this)
      this.toggleState = this.toggleState.bind(this)
      this.errorCheck = this.errorCheck.bind(this)
      this.state = {
        characterName: this.props.character.characterName,
        race: this.props.character.race,
        class: this.props.character.class,
        lv: this.props.character.lv,
        ac: this.props.character.ac,
        hp: this.props.character.hp,
        strength: this.props.character.strength,
        dexterity: this.props.character.dexterity,
        constitution: this.props.character.constitution,
        intelligence: this.props.character.intelligence,
        wisdom: this.props.character.wisdom,
        charisma: this.props.character.charisma,
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
        raceShow: false,
        classShow: false,
        showErrors: false
      }
  }

  componentDidMount(){
    document.getElementById("updateCharacterForm").focus()
    // this.props.updateTopLevelState();
    // var fields = ['characterName', 'race', 'class', 'lv', 'ac', 'hp', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
    // var values = [this.props.character.Name, this.props.character.ace, this.props.character.class, this.props.character.lv, this.props.character.ac, this.props.character.hp, this.props.character.strength, this.props.character.dexterity, this.props.character.constitution,
    //    this.props.character.intelligence, this.props.character.wisdom, this.props.character.charisma];
    // for (var i = 0; i < fields.length; i++) {
    //   var data = {
    //     property:fields[i],
    //     value: values[i]
    //   }
    //   store.dispatch(this.setCharacterAttributes(data))
    // }
    // TODO characterPage uses its local state when sending the update
    // two fixes in mind
    //  on inital  mount set the state of characterPage to
  }

  async updateAndToggle(e) {
    e.preventDefault()
    this.setState({showErrors: true})
    var fields = ['characterName', 'race', 'class', 'lv', 'ac', 'hp', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
    var character = {
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
      charisma: this.state.charisma,
    }
    await this.errorCheck(fields)
    if(this.state.updateCharacterError) return
    console.log('too far');
    console.log(this.props.character);
    // return;
    await this.props.onSubmit(character);
    await this.toggleHide();
  }

  errorCheck(fields){
    var errArr = [];
    function isTrue(ele){
      return ele === true;
    }
    for (var i = 0; i < fields.length; i++) {
      var error = fields[i]+"Error"
      if(this.state[fields[i]]===''){
        this.setState({[error]:true})
        errArr.push(true)
      }else{
        this.setState({[error]:false})
        errArr.push(false)
      }
    }
    if(errArr.some(isTrue)){
      this.setState({updateCharacterError:true})
    }else {
      this.setState({updateCharacterError:false})
    }
    console.log('errorCheck State ',this.state);
  }

  async updateCharacterAttribute(e){
    var fields = ['characterName', 'race', 'class', 'lv', 'ac', 'hp', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
    var data = {
      name: e.target.getAttribute("name"),
      value:e.target.value
    }
    if(data.value===undefined) {
      console.log('UNDEFINED');
      data.value=e.target.getAttribute("value")
    }
    console.log(e.target);
    console.log(data);
    await this.setState({[data.name]:data.value})
    await this.errorCheck(fields)
    console.log(this.state);
  }

  onEscapeKey(e) {
    console.log(e.keyCode);
    if(e.keyCode===27){
      this.toggleHide()
    }
  }
  deepOnEscapeKey(e) {
    this.stopPropagation(e)
    this.onEscapeKey(e)
  }

  makeUppercase(str){
    var firstLetter = str.charAt(0).toUpperCase();
    var restOfString = str.slice(1);
    return firstLetter+restOfString
  }

  changeAndClose(e){
    this.updateCharacterAttribute(e)
    this.closeSelect(e)
  }

  toggleState(e){
    var name = e.target.getAttribute('name')+'Show'
    var opp = name === 'raceShow' ? 'classShow' : 'raceShow';
    if(this.state[opp]){
        this.setState(prevState =>({
          [opp]: !prevState[opp]
        }))
    }
    this.setState(prevSate => ({
      [name]: !prevSate[name]
    }))
  }

  closeSelect(e){
    var name = e.target.getAttribute("name");
    var show = name+"Show";
    this.setState(prevState => ({
      [show]: !prevState[show]
    }))
  }




  render() {
    return (
          <section className="update-weapon-form-base">
            <section className="update-weapon-form-shader"
                     id="updateCharacterForm"
                     onClick={this.toggleHide}
                     onKeyDown={this.onEscapeKey}
                     tabIndex="0"
                     autoFocus>
              <form className="update-weapon-form"
                    onSubmit={this.updateAndToggle}
                    onClick={this.stopPropagation}>
                <div className="update-character-input-div">
                  <input className={" update-character-input " + (this.state.showErrors && this.state.updateCharacterError && this.state.characterNameError ? ' input-error '  :null)}
                         onChange={this.updateCharacterAttribute}
                         type="text"
                         name="characterName"
                         defaultValue={this.props.character.characterName}
                         placeholder="Character name"
                         onKeyDown={this.deepOnEscapeKey}></input>
                         <section className="select-section">
                           <div onClick={this.toggleState}
                                className={"select-title " + (this.state.raceShow ? ' select-title-toggle ' : null) + (this.props.raceError && this.state.showErrors ? ' input-error ' :null)}
                                name="race">
                             {this.state.race ? this.makeUppercase(this.state.race) : "Select Race"}
                           </div>
                           {this.state.raceShow ?
                             <div className="select-option-container">
                               <div className="select-option"
                                    onClick={this.changeAndClose}
                                    name="race"
                                    value="human"
                                    type="text">
                                   Human
                               </div>
                               <div className="select-option"
                                    onClick={this.changeAndClose}
                                    name="race"
                                    value="orc"
                                    type="text">
                                   Orc
                               </div>
                               <div className="select-option"
                                    onClick={this.changeAndClose}
                                    name="race"
                                    value="elf"
                                    type="text">
                                   Elf
                               </div>
                               <div className="select-option"
                                    onClick={this.changeAndClose}
                                    name="race"
                                    value="dwarf"
                                    type="text">
                                   Dwarf
                               </div>
                             </div>
                           :null}
                           <div onClick={this.toggleState}
                                className={"select-title " + (this.state.classShow ? ' select-title-toggle ' :null ) + (this.props.classError && this.state.showErrors ?  ' input-error ' :null)}
                                name="class">
                             {this.state.class ? this.makeUppercase(this.state.class) : "Select Class"}
                           </div>
                           {this.state.classShow ?
                             <div className="select-option-container">
                               <div className="select-option"
                                    onClick={this.changeAndClose}
                                    name="class"
                                    value="wizard"
                                    type="text">
                                   Wizard
                               </div>
                               <div className="select-option"
                                    onClick={this.changeAndClose}
                                    name="class"
                                    value="fighter"
                                    type="text">
                                   Fighter
                               </div>
                               <div className="select-option"
                                    onClick={this.changeAndClose}
                                    name="class"
                                    value="cleric"
                                    type="text">
                                   Cleric
                               </div>
                               <div className="select-option"
                                    onClick={this.changeAndClose}
                                    name="class"
                                    value="druid"
                                    type="text">
                                   Druid
                               </div>
                             </div>
                           :null}
                         </section>
                  <input className={" update-character-input " + (this.state.showErrors && this.state.updateCharacterError && this.state.lvError ? ' input-error '  :null)}
                         onChange={this.updateCharacterAttribute}
                         type="text"
                         name="lv"
                         defaultValue={this.props.character.lv}
                         placeholder="Lv"
                         onKeyDown={this.deepOnEscapeKey}></input>
                  <input className={" update-character-input " + (this.state.showErrors && this.state.updateCharacterError && this.state.acError ? ' input-error '  :null)}
                         onChange={this.updateCharacterAttribute}
                         type="text"
                         name="ac"
                         defaultValue={this.props.character.ac}
                         placeholder="AC"
                         onKeyDown={this.deepOnEscapeKey}></input>
                  <input className={" update-character-input " + (this.state.showErrors && this.state.updateCharacterError && this.state.hpError ? ' input-error '  :null)}
                         onChange={this.updateCharacterAttribute}
                         type="text"
                         name="hp"
                         defaultValue={this.props.character.hp}
                         placeholder="HP"
                         onKeyDown={this.deepOnEscapeKey}></input>
                   <section className="update-character-stat-input-container">
                    <div className="update-stat-input-container">
                     <div className="update-stat-input-div">
                       <h1 className="update-stat-input-title">STR</h1>
                       <input className= {" update-character-stat-input " + (this.state.showErrors && this.state.updateCharacterError && this.state.strengthError ? ' input-error '  :null)}
                         onChange={this.updateCharacterAttribute}
                         type="number"
                         name="strength"
                         defaultValue={this.props.character.strength}
                         placeholder="(15)"
                         min="1"
                         max="20"
                         onKeyDown={this.deepOnEscapeKey}></input>
                      </div>
                    </div>
                    <div className="update-stat-input-container">
                     <div className="update-stat-input-div">
                       <h1 className="update-stat-input-title">DEX</h1>
                       <input className= {" update-character-stat-input " + (this.state.showErrors && this.state.updateCharacterError && this.state.dexterityError ? ' input-error '  :null)}
                         onChange={this.updateCharacterAttribute}
                         type="number"
                         name="dexterity"
                         defaultValue={this.props.character.dexterity}
                         placeholder="(15)"
                         min="1"
                         max="20"
                         onKeyDown={this.deepOnEscapeKey}></input>
                      </div>
                    </div>
                    <div className="update-stat-input-container">
                     <div className="update-stat-input-div">
                       <h1 className="update-stat-input-title">CON</h1>
                       <input className= {" update-character-stat-input " + (this.state.showErrors && this.state.updateCharacterError && this.state.constitutionError ? ' input-error '  :null)}
                         onChange={this.updateCharacterAttribute}
                         type="number"
                         name="constitution"
                         defaultValue={this.props.character.constitution}
                         placeholder="(15)"
                         min="1"
                         max="20"
                         onKeyDown={this.deepOnEscapeKey}></input>
                      </div>
                    </div>
                    <div className="update-stat-input-container">
                     <div className="update-stat-input-div">
                       <h1 className="update-stat-input-title">INT</h1>
                       <input className= {" update-character-stat-input " + (this.state.showErrors && this.state.updateCharacterError && this.state.intelligenceError ? ' input-error '  :null)}
                         onChange={this.updateCharacterAttribute}
                         type="number"
                         name="intelligence"
                         defaultValue={this.props.character.intelligence}
                         placeholder="(15)"
                         min="1"
                         max="20"
                         onKeyDown={this.deepOnEscapeKey}></input>
                      </div>
                    </div>
                    <div className="update-stat-input-container">
                     <div className="update-stat-input-div">
                       <h1 className="update-stat-input-title">WIS</h1>
                       <input className= {" update-character-stat-input " + (this.state.showErrors && this.state.updateCharacterError && this.state.wisdomError ? ' input-error '  :null)}
                         onChange={this.updateCharacterAttribute}
                         type="number"
                         name="wisdom"
                         defaultValue={this.props.character.wisdom}
                         placeholder="(15)"
                         min="1"
                         max="20"
                         onKeyDown={this.deepOnEscapeKey}></input>
                      </div>
                    </div>
                      <div className="update-stat-input-container">
                       <div className="update-stat-input-div">
                         <h1 className="update-stat-input-title">CHA</h1>
                         <input className= {" update-character-stat-input " + + (this.state.showErrors && this.state.updateCharacterError && this.state.intelligenceError ? ' input-error '  :null)}
                           onChange={this.updateCharacterAttribute}
                           type="number"
                           name="charisma"
                           defaultValue={this.props.character.charisma}
                           placeholder="(15)"
                           min="1"
                           max="20"
                           onKeyDown={this.deepOnEscapeKey}></input>
                        </div>
                      </div>

                  </section>
                </div>
                <button className="update-character-button" type="submit">Create</button>
              </form>
            </section>
          </section>
    )
  }
}
