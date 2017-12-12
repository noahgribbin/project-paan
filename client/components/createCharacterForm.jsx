'use strict'

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types'

export class CreateCharacterForm extends React.Component {

  constructor(props) {
    super(props)
    console.log(this);
    this.onInput = this.props.onInput.bind(this);
    this.onSubmit = this.props.onSubmit.bind(this);
    this.errorCheck = this.props.errorCheck.bind(this);
    this.submitAndClear = this.submitAndClear.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.closeSelect = this.closeSelect.bind(this);
    this.changeAndClose = this.changeAndClose.bind(this);
    this.makeUppercase = this.makeUppercase.bind(this);
    this.state = {
      showErrors: false,
      raceShow: false,
      classShow: false
    }
  }
  async onChange(e){
  const fields = ['characterName', 'race', 'class', 'lv','ac','hp','strength','dexterity','constitution','intelligence','wisdom','charisma'];
  // this.setState({showErrors: false})
  console.log(e.target);
  console.log(this.state);
  await this.props.onInput(e)
  await this.props.errorCheck(fields)

  }

  async submitAndClear(e){
    this.setState({showErrors: true})
    await this.onSubmit(e)
    if(this.props.createCharacterError) return
    this.props.closeFormOpenList()
    this.setState({showErrors: false})
  }

  toggleState(e){
    console.log('show Race');
    var name = e.target.getAttribute('name')+'Show'
    var opp = name === 'raceShow' ? 'classShow' : 'raceShow';
    console.log(name);
    console.log(opp);
    if(this.state[opp]){
        console.log('SHOULD CLOSE');
        this.setState(prevState =>({
          [opp]: !prevState[opp]
        }))
    }
    this.setState(prevSate => ({
      [name]: !prevSate[name]
    }))
    console.log(this.state);
  }

  closeSelect(e){
    e.stopPropogation()
    console.log('!!!!!!!!');
    var name = e.target.getAttribute("name");
    var show = name+"Show";
    console.log(name);
    console.log(show);
    this.setState(prevState => ({
      [show]: !prevState[show]
    }))
  }

  makeUppercase(str){
    var firstLetter = str.charAt(0).toUpperCase();
    var restOfString = str.slice(1);
    return firstLetter+restOfString
  }

  changeAndClose(e){
    this.onChange(e)
    this.closeSelect(e)
  }

  render() {
    return (
        <section className="create-character-section">
          <h1 className="create-character-title"
              >Create a Character</h1>
          <form className="create-character-form"
                onSubmit={this.submitAndClear}
                id="createCharacterForm"
                >
                  { this.props.createCharacterError && this.state.showErrors ?<p className="input-error-message">Please fill out empty fields</p> :null}
            <div className="create-character-input-div">
              <input className={"create-character-input " + (this.props.characterNameError  && this.state.showErrors ? 'input-error' :null)}
                     onChange={this.onChange}
                     type="text"
                     name="characterName"
                     placeholder="Character name" ></input>
              <section className="select-section">
                <div onClick={this.toggleState}
                     className={"select-title " + (this.state.raceShow ? ' select-title-toggle ' : null) + (this.props.raceError && this.state.showErrors ? ' input-error ' :null)}
                     name="race">
                  {this.props.race ? this.makeUppercase(this.props.race) : "Select Race"}

                  <div className={"select-option-container " + (!this.state.raceShow ? ' short ' : ' select-option-shown ')}>
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

                </div>
                <div onClick={this.toggleState}
                     className={"select-title " + (this.state.classShow ? ' select-title-toggle ' :null ) + (this.props.classError && this.state.showErrors ?  ' input-error ' :null)}
                     name="class">
                  {this.props.class ? this.makeUppercase(this.props.class) : "Select Class"}
                  <div className={"select-option-container " + (!this.state.classShow ? ' short ' : ' select-option-shown ')}>
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
              </div>
              </section>
              <input className={"create-character-input " + (this.props.lvError === true && this.state.showErrors ? 'input-error' :null)}
                     onChange={this.onChange}
                     type="number"
                     name="lv"
                     placeholder="Lv" ></input>
              <input className={"create-character-input " + (this.props.acError === true && this.state.showErrors ? 'input-error' :null)}
                     onChange={this.onChange}
                     type="number"
                     name="ac"
                     placeholder="AC" ></input>
              <input className={"create-character-input " + (this.props.hpError === true && this.state.showErrors ? 'input-error' :null)}
                     onChange={this.onChange}
                     type="number"
                     name="hp"
                     placeholder="HP" ></input>
               <section className="create-character-stat-input-container">
                 <div className="stat-input-div">
                   <h1 className={"stat-input-title " + (this.props.strengthError=== true && this.state.showErrors ? 'stat-input-error' :null)}>STR</h1>
                   <input className="create-character-stat-input"
                     onChange={this.onChange}
                     type="number"
                     name="strength"
                     placeholder="(15)"
                     min="1"
                     max="20"></input>
                  </div>
                 <div className="stat-input-div">
                   <h1 className={"stat-input-title "  + (this.props.dexterityError=== true && this.state.showErrors ? 'stat-input-error' :null)}>DEX</h1>
                   <input className="create-character-stat-input"
                     onChange={this.onChange}
                     type="number"
                     name="dexterity"
                     placeholder="(15)"
                     min="1"
                     max="20"></input>
                  </div>
                 <div className="stat-input-div">
                   <h1 className={"stat-input-title " + (this.props.constitutionError=== true && this.state.showErrors ? 'stat-input-error' :null)}>CON</h1>
                   <input className="create-character-stat-input"
                     onChange={this.onChange}
                     type="number"
                     name="constitution"
                     placeholder="(15)"
                     min="1"
                     max="20"></input>
                  </div>
                 <div className="stat-input-div">
                   <h1 className={"stat-input-title " + (this.props.intelligenceError=== true && this.state.showErrors ? 'stat-input-error' :null)}>INT</h1>
                   <input className="create-character-stat-input"
                     onChange={this.onChange}
                     type="number"
                     name="intelligence"
                     placeholder="(15)"
                     min="1"
                     max="20"></input>
                  </div>
                 <div className="stat-input-div">
                   <h1 className={"stat-input-title " + (this.props.wisdomError=== true && this.state.showErrors ? 'stat-input-error' :null)}>WIS</h1>
                   <input className="create-character-stat-input"
                     onChange={this.onChange}
                     type="number"
                     name="wisdom"
                     placeholder="(15)"
                     min="1"
                     max="20"></input>
                  </div>
                 <div className="stat-input-div">
                   <h1 className={"stat-input-title " + (this.props.charismaError === true && this.state.showErrors ? 'stat-input-error' :null)}>CHA</h1>
                   <input className="create-character-stat-input"
                     onChange={this.onChange}
                     type="number"
                     name="charisma"
                     placeholder="(15)"
                     min="1"
                     max="20"></input>
                  </div>

              </section>
            </div>
            <button className="create-character-button" type="submit">Create</button>
          </form>
        </section>
    )
  }
}

CreateCharacterForm.propTypes = {
  onSubmit: React.PropTypes.func,
  onInput: React.PropTypes.func,
  errorCheck: React.PropTypes.func

}
