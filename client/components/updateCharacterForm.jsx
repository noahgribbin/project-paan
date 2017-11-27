'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class UpdateCharacterForm extends React.Component {
  constructor(props) {
    super(props)
      console.log('updateCharacterForm',this);
      // this.onSubmit = this.props.onSubmit.bind(this)
      // this.onInput = this.props.onInput.bind(this)
      this.toggleHide = this.props.toggleHide.bind(this)
      this.updateAndToggle = this.props.updateAndToggle.bind(this)
      this.onEscapeKey = this.props.onEscapeKey.bind(this)
      this.deepOnEscapeKey = this.props.deepOnEscapeKey.bind(this)
      this.stopPropagation = this.props.stopPropagation.bind(this)
      this.state = {

      }
  }

  componentDidMount(){
    document.getElementById("updateCharacterForm").focus()
    this.setState()
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
