'use strict';

import React from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import store from '../store.js';

import { history } from '../entry.jsx';

import { CreateWeaponForm } from '../components/createWeaponForm.jsx'
import { WeaponList } from '../components/weaponList.jsx'
import { CreateArmorForm } from '../components/createArmorForm.jsx'
import { ArmorList } from '../components/armorList.jsx'
import { CreateSpellForm } from '../components/createSpellForm.jsx'
import { SpellList } from '../components/spellList.jsx'
import { DeleteCharacter } from '../components/deleteCharacter.jsx'
import { UpdateCharacterForm } from '../components/updateCharacterForm.jsx'
import  CharacterHeader  from '../components/characterHeader.jsx'
import  { Navbar } from '../components/navbar.jsx'

import { createWeapon, getAllWeapons, deleteWeapon, updateWeapon, updateWeaponName, setWeapons, getCharacter,
         getAllCharacters, deleteCharacter,updateCharacter, updateCharacterName,
         createArmor, getAllArmor, deleteArmor, updateArmor, updateArmorName, setArmor,
         createSpell, getAllSpells, deleteSpell, updateSpell, updateSpellName, setSpells, joinParty, setJoinCode,
         getPartyMembers, setWeaponAttributes, setSpellAttributes, create
       } from '../actions/characterActions.js'


class CharacterPage extends React.Component {
  constructor(props) {
    super(props)
    console.log('characterPage',this);
    this.onJoinPartySubmit = this.onJoinPartySubmit.bind(this);
    this.toSessionPage = this.toSessionPage.bind(this);
    // this.loadCharacterData = this.loadCharacterData.bind(this);

    this.onClickDeleteCharacter = this.onClickDeleteCharacter.bind(this);
    this.onSubmitUpdateCharacter = this.onSubmitUpdateCharacter.bind(this);
    this.onInput = this.onInput.bind(this);

    this.onSubmitCreateWeapon = this.onSubmitCreateWeapon.bind(this);
    this.onSubmitUpdateWeapon = this.onSubmitUpdateWeapon.bind(this);
    this.onClickDeleteWeapon = this.onClickDeleteWeapon.bind(this);
    this.onWeaponNameInput = this.onWeaponNameInput.bind(this);

    this.onSubmitCreateArmor = this.onSubmitCreateArmor.bind(this);
    this.onSubmitUpdateArmor = this.onSubmitUpdateArmor.bind(this);
    this.onClickDeleteArmor = this.onClickDeleteArmor.bind(this);
    this.onArmorNameInput = this.onArmorNameInput.bind(this);

    this.onSubmitCreateSpell = this.onSubmitCreateSpell.bind(this);
    this.onSubmitUpdateSpell = this.onSubmitUpdateSpell.bind(this);
    this.onClickDeleteSpell = this.onClickDeleteSpell.bind(this);
    this.onSpellNameInput = this.onSpellNameInput.bind(this);

    this.state = {
      campaignName: '',
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
      charisma: ''
    }
  }
   async componentWillMount(){
    console.log('state',this.state);
    console.log('props',this.props);
    var data = {
      id: this.props.sessionCharacterId,
      token: this.props.token
    }
    await this.props.getCharacter(data)
    .then(character => {
      console.log('CHARACTER', character);
      var characterName = character.value
      if(character.value.dmID.campaignName){
        var campaignName = character.value.dmID.campaignName
      }
      this.setState({cahracter:character})
    })
    console.log(this.state);
    await  this.props.getAllArmor(data)
    await this.props.getAllWeapons(data)
    await  this.props.getAllSpells(data)
  }

  // Party function
  onJoinPartySubmit() {
    // e.preventDefault()
    const data = {
      code : this.props.code,
      token: this.props.token,
      id:    this.props.sessionCharacterId
    }
    console.log('onJoinPartySubmit',data);
    store.dispatch(joinParty(data))
    .then(() =>{

      this.setState({campaignName: store.getState().characterReducer.campaign.campaignName})
      console.log('this.state', this.state);
    })
}

  // Character functions
  onJoinCodeInput(e) {
    store.dispatch(setJoinCode(e.target.value))
  }
  onClickDeleteCharacter() {
    const data = {id: this.props.sessionCharacterId,token: this.props.token}
    const allCharacterData = {id: this.props.profileId,token: this.props.token}
    store.dispatch(deleteCharacter(data))
    .then(() => {
      store.dispatch(getAllCharacters(allCharacterData))
      .then(() => {

        history.push('./player')
      })
    })
  }

  onSubmitUpdateCharacter() {
    const data = {
      id:     this.props.sessionCharacterId,
      token:  this.props.token,
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
      }
    }
    const allCharacterData = {
      id: this.props.profileId,
      token: this.props.token
    }
    store.dispatch(updateCharacter(data))
    .then(() => {
      store.dispatch(getAllCharacters(allCharacterData))
    })
  }


  onInput(e) {
    var type = e.target.getAttribute('name')
    var value = e.target.value
    if (value===null) {
      value=e.target.getAttribute('value')
    }
    console.log('type:value');
    console.log('type',type);
    console.log('value',value);
    console.log(type,value);
    this.setState({
      [type]: value
    })
    console.log(this.state);
  }


  // Weapon functions
  onLoadAllWeapons() {
    const data = {
      id: this.props.sessionCharacterId,
      token: this.props.token
    }
    store.dispatch(getAllWeapons(data))
  }

  onSubmitCreateWeapon(e) {
    e.preventDefault();
    var dice = null;
    const diceAmount = this.props.diceAmount
    const diceValue = this.props.diceValue

    if(diceValue&&diceAmount) dice = diceAmount + diceValue
    console.log(dice);


    const data = {
      weapon: {
        name:   this.props.weaponName,
        damage:   this.props.weaponType,
        dice:   dice,
      },
      token: this.props.token,
      id: this.props.sessionCharacterId
    }
    const getWeaponsData = {
      token: this.props.token,
      id: this.props.sessionCharacterId
    }


    store.dispatch(createWeapon(data))
    .then( () => {
      store.dispatch(getAllWeapons(getWeaponsData))
        .then(weapons => {
          store.dispatch(setWeapons(weapons.value))
        })
    })
  }

  onSubmit(payload){
    if(type==='weapon'){
      store.dispatch(createWeapon(data))
      .then( () => {
        store.dispatch(getAllWeapons(getWeaponsData))
          .then(weapons => {
            store.dispatch(setWeapons(weapons.value))
          })
      })
    }
  }

  onSubmitUpdateWeapon(id) {
    var dice = null;
    const diceAmount = this.props.diceAmount
    const diceValue = this.props.diceValue
    if(diceValue&&diceAmount) dice = diceAmount + diceValue
    console.log('dice',dice);
    const data =  {
      id: id,
      token: this.props.token,
      weapon: {
        name: this.props.weaponName,
        dice: dice,
        damage: this.props.weaponType
      }
    }
    console.log('data',data);
    const characterData = {
      id: this.props.sessionCharacterId,
      token: this.props.token
    }
    store.dispatch(updateWeapon(data))
    .then( () => {
      store.dispatch(getAllWeapons(characterData))
      .then( weapons => {
        store.dispatch(setWeapons(weapons.value))
      })
    })
  }

  onClickDeleteWeapon(e) {
    e.preventDefault();
    const data = {
      id: e.target.getAttribute('id'),
      token: this.props.token
    }
    store.dispatch(deleteWeapon(data))
    .then( stuff => {
    })
  }

  onWeaponNameInput(e) {
    store.dispatch(updateWeaponName(e.target.value))
  }

  // Armor

  onSubmitCreateArmor(e) {
    e.preventDefault();
    const data = {
      armor: {
        name: this.props.armorName
      },
      token: this.props.token,
      id: this.props.sessionCharacterId
    }
    const getArmorData = {
      token: this.props.token,
      id: this.props.sessionCharacterId
    }
    store.dispatch(createArmor(data))
    .then( () => {
      store.dispatch(getAllArmor(getArmorData))
        .then(armor => {
          console.log('createArmor All armor', armor)
          store.dispatch(setArmor(armor.value))
          // this.setState({armor})
          console.log('this.state', this.state);
        })
    })
  }


  onSubmitUpdateArmor(id) {
    const data =  {
      id: id,
      token: this.props.token,
      armor: {
        name: this.props.armorName
      }
    }
    const characterData = {
      id: this.props.sessionCharacterId,
      token: this.props.token
    }
    store.dispatch(updateArmor(data))
    .then( () => {
      store.dispatch(getAllArmor(characterData))
      .then( armor => {
        store.dispatch(setArmor(armor.value))
      })
    })
  }

  onClickDeleteArmor(e) {
    e.preventDefault();
    const data = {
      id: e.target.getAttribute('id'),
      token: this.props.token
    }
    store.dispatch(deleteArmor(data))
  }

  onArmorNameInput(name) {
    store.dispatch(updateArmorName(name))
  }

  // Spells
  onSubmitCreateSpell(e) {
    e.preventDefault();
    const data = {
      spell: {
        name: this.props.spellName,
        castingTime: this.props.castingTime,
        range: this.props.range,
        duration: this.props.duration,
        components: this.props.components,
        description: this.props.description
      },
      token: this.props.token,
      id: this.props.sessionCharacterId
    }
    const getSpellData = {
      token: this.props.token,
      id: this.props.sessionCharacterId
    }
    store.dispatch(createSpell(data))
    .then( () => {
      store.dispatch(getAllSpells(getSpellData))
        .then(spell => {
          store.dispatch(setSpells(spell.value))
        })
    })
  }

  onSubmitUpdateSpell(id) {
    const data =  {
      id: id,
      token: this.props.token,
      spell: {
        name: this.props.spellName,
        castingTime: this.props.castingTime,
        range: this.props.range,
        duration: this.props.duration,
        components: this.props.components,
        description: this.props.description
      }
    }
    const characterData = {
      id: this.props.sessionCharacterId,
      token: this.props.token
    }
    store.dispatch(updateSpell(data))
    .then( () => {
      store.dispatch(getAllSpells(characterData))
      .then( spell => {
        store.dispatch(setSpells(spell.value))
      })
    })
  }

  onClickDeleteSpell(e) {
    e.preventDefault();
    const data = {
      id: e.target.getAttribute('id'),
      token: this.props.token
    }
    store.dispatch(deleteSpell(data))
  }

  onSpellNameInput(e) {
    store.dispatch(updateSpellName(e.target.value))
  }

  toSessionPage(e) {
    var data = {
      id:    this.props.sessionCharacterId,
      token: this.props.token
    }
    store.dispatch(getPartyMembers(data))
    .then(() => {
      history.push('./session')
    })
  }

  render() {
    return (
      <section>
        <Navbar />
        <section className="page-container">
        <CharacterHeader
          character={this.props.character}
          onJoinPartySubmit = {this.onJoinPartySubmit}
          onJoinCodeInput = {this.onJoinCodeInput}
          deleteCharacter={this.onClickDeleteCharacter}
          updateCharacter={this.onSubmitUpdateCharacter}
          loadCharacterData={this.loadCharacterData}
          onInput = {this.onInput}
          campaign = {this.props.campaign}
          campaignName={this.state.campaignName}
        />

        <CreateWeaponForm
          onSubmit = {this.onSubmitCreateWeapon}
          onWeaponNameInput = {this.onWeaponNameInput}
          setWeaponAttributes = {this.props.setWeaponAttributes}
        />
        <WeaponList
          // load = {this.onClickAllWeapons()}
          onLoad  ={this.onLoadAllWeapons}
          deleteWeapon ={this.onClickDeleteWeapon}
          weapons = {this.props.weapons}
          onSubmit = {this.onSubmitUpdateWeapon}
          onInput = {this.onInput}
          onWeaponNameInput = {this.onWeaponNameInput}
          setWeaponAttributes = {this.props.setWeaponAttributes}
        />
        <CreateArmorForm
          onSubmit = {this.onSubmitCreateArmor}
          onArmorNameInput = {this.onArmorNameInput}
        />
        <ArmorList
          deleteArmor ={this.onClickDeleteArmor}
          armor = {this.props.armor}
          onSubmit = {this.onSubmitUpdateArmor}
          onArmorNameInput = {this.onArmorNameInput}
        />

        <CreateSpellForm
          onSubmit = {this.onSubmitCreateSpell}
          onSpellNameInput = {this.onSpellNameInput}
          setSpellAttributes = {this.props.setSpellAttributes}
        />
        <SpellList
          deleteSpell ={this.onClickDeleteSpell}
          spells = {this.props.spells}
          onSubmit = {this.onSubmitUpdateSpell}
          onSpellNameInput = {this.onSpellNameInput}
          setSpellAttributes = {this.props.setSpellAttributes}
        />

        { this.props.campaign ? <h1  className="to-session-page-h1" onClick={this.toSessionPage}>TO SESSION PAGE</h1> :null}
      </section>
      </section>
    )
  }
}


const mapStateToProps = (state) => {
  console.log("!!STORE!!",state);
  return {
    weapons: state.characterReducer.weapons,
    armor:   state.characterReducer.armor,
    spells:   state.characterReducer.spells,
    character:   state.characterReducer.character,
    campaign:   state.characterReducer.campaign,
    campaignName:   state.characterReducer.campaignName,
    castingTime: state.characterReducer.castingTime,
    code : state.characterReducer.partyCode,
    token: state.userReducer.token,
    sessionCharacterId: state.characterReducer.sessionCharacter,
    profileId: state.profileReducer.profileID,
    characterId: state.characterReducer.id,
    diceAmount: state.characterReducer.diceAmount,
    diceValue: state.characterReducer.diceValue,
    armorName: state.characterReducer.armorName,
    weaponName: state.characterReducer.weaponName,
    weaponType: state.characterReducer.damageType,
    spellName: state.characterReducer.spellName,
    range:  state.characterReducer.range,
    duration: state.characterReducer.duration,
    components: state.characterReducer.components,
    description: state.characterReducer.description
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setWeaponAttributes: setWeaponAttributes,
    setSpellAttributes: setSpellAttributes,
    getCharacter: getCharacter,
    getAllWeapons: getAllWeapons,
    getAllSpells: getAllSpells,
    getAllArmor: getAllArmor
  }, dispatch);
}

CharacterPage.propTypes = {
  weapons:         React.PropTypes.array,
  armor:  React.PropTypes.array,
  spell:  React.PropTypes.array,
  campaign:  React.PropTypes.object,
  campaignName:  React.PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage)
