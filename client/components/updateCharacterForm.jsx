'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class UpdateCharacterForm extends React.Component {
  constructor(props) {
    super(props)
      console.log('updateCharacterForm',this);
      this.toggleHide = this.props.toggleHide.bind(this)
      this.updateAndToggle = this.updateAndToggle.bind(this)
      this.onEscapeKey = this.onEscapeKey.bind(this)
      this.deepOnEscapeKey = this.deepOnEscapeKey.bind(this)
      this.stopPropagation = this.props.stopPropagation.bind(this)
      this.closeSelect = this.closeSelect.bind(this)
      this.makeUppercase = this.makeUppercase.bind(this)
      this.changeAndClose = this.changeAndClose.bind(this)
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
        characterName: this.props.character.characterName,
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
      }
  }

  componentDidMount(){
    document.getElementById("updateCharacterForm").focus()
    this.setState()
  }

  updateAndToggle(e) {
    e.preventDefault()
    this.toggleHide();
    this.props.onSubmit();
  }

  errorCheck

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
    this.props.onInput(e)
    this.closeSelect(e)
  }

  closeSelect(e){
    var name = e.target.getAttribute("name");
    var show = name+"Show";
    console.log(name);
    console.log(show);
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
                  <input className="update-character-input"
                         onChange={this.props.onInput}
                         type="text"
                         name="characterName"
                         placeholder="Character name"
                         onKeyDown={this.deepOnEscapeKey}></input>
                         <section className="select-section">
                           <div onClick={this.toggleState}
                                className={"select-title " + (this.state.raceShow ? ' select-title-toggle ' : null) + (this.props.raceError && this.state.showErrors ? ' input-error ' :null)}
                                name="race">
                             {this.props.race ? this.makeUppercase(this.props.race) : "Select Race"}
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
                             {this.props.class ? this.makeUppercase(this.props.class) : "Select Class"}
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
                  <input className="update-character-input"
                         onChange={this.props.onInput}
                         type="text"
                         name="lv"
                         placeholder="Lv"
                         onKeyDown={this.deepOnEscapeKey}></input>
                  <input className="update-character-input"
                         onChange={this.props.onInput}
                         type="text"
                         name="ac"
                         placeholder="AC"
                         onKeyDown={this.deepOnEscapeKey}></input>
                  <input className="update-character-input"
                         onChange={this.props.onInput}
                         type="text"
                         name="hp"
                         placeholder="HP"
                         onKeyDown={this.deepOnEscapeKey}></input>
                   <section className="update-character-stat-input-container">
                    <div className="update-stat-input-container">
                     <div className="update-stat-input-div">
                       <h1 className="update-stat-input-title">STR</h1>
                       <input className="update-character-stat-input"
                         onChange={this.props.onInput}
                         type="number"
                         name="strength"
                         placeholder="(15)"
                         min="1"
                         max="20"
                         onKeyDown={this.deepOnEscapeKey}></input>
                      </div>
                    </div>
                    <div className="update-stat-input-container">
                     <div className="update-stat-input-div">
                       <h1 className="update-stat-input-title">DEX</h1>
                       <input className="update-character-stat-input"
                         onChange={this.props.onInput}
                         type="number"
                         name="dexterity"
                         placeholder="(15)"
                         min="1"
                         max="20"
                         onKeyDown={this.deepOnEscapeKey}></input>
                      </div>
                    </div>
                    <div className="update-stat-input-container">
                     <div className="update-stat-input-div">
                       <h1 className="update-stat-input-title">CON</h1>
                       <input className="update-character-stat-input"
                         onChange={this.props.onInput}
                         type="number"
                         name="constitution"
                         placeholder="(15)"
                         min="1"
                         max="20"
                         onKeyDown={this.deepOnEscapeKey}></input>
                      </div>
                    </div>
                    <div className="update-stat-input-container">
                     <div className="update-stat-input-div">
                       <h1 className="update-stat-input-title">INT</h1>
                       <input className="update-character-stat-input"
                         onChange={this.props.onInput}
                         type="number"
                         name="intelligence"
                         placeholder="(15)"
                         min="1"
                         max="20"
                         onKeyDown={this.deepOnEscapeKey}></input>
                      </div>
                    </div>
                    <div className="update-stat-input-container">
                     <div className="update-stat-input-div">
                       <h1 className="update-stat-input-title">WIS</h1>
                       <input className="update-character-stat-input"
                         onChange={this.props.onInput}
                         type="number"
                         name="wisdom"
                         placeholder="(15)"
                         min="1"
                         max="20"
                         onKeyDown={this.deepOnEscapeKey}></input>
                      </div>
                    </div>
                      <div className="update-stat-input-container">
                       <div className="update-stat-input-div">
                         <h1 className="update-stat-input-title">CHA</h1>
                         <input className="update-character-stat-input"
                           onChange={this.props.onInput}
                           type="number"
                           name="charisma"
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
