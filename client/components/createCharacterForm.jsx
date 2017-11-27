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
    this.state = {
      showErrors: false
    }
  }
  async onChange(e){
  const fields = ['characterName','lv','ac','hp','strength','dexterity','constitution','intelligence','wisdom','charisma'];
  // this.setState({showErrors: false})
  console.log(this.state);
  await this.props.onInput(e)
  await this.props.errorCheck(fields)

  }

  async submitAndClear(e){
    this.setState({showErrors: true})
    await this.onSubmit(e)
    if(this.props.createCharacterError) return
    console.log('no Error');
    this.setState({showErrors: false})
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
