'use strict';

const initialState = {
  characterName: '',
  sessionCharacter: '',
  campaignName: '',
  id: '',
  weapons:[],
  character: {},
  campaign: {}
};

export default function characterReducer(state=initialState, action) {
  switch(action.type) {
  case 'CREATE_CHARACTER_PENDING' :
    return Object.assign({}, state, {
    });
  case 'CREATE_CHARACTER_FULFILLED' :
    return Object.assign({}, state, {
      characterName: action.payload.characterName,
      id: action.payload._id,
    });
  case 'CREATE_CHARACTER_REJECTED' :
    return Object.assign({}, state, {

    });
  case 'SET_JOIN_CODE' :
    return Object.assign({}, state, {
      partyCode: action.partyCode
    });
  case 'JOIN_PARTY_PENDING' :
    return Object.assign({}, state, {
      // campaign: null

    });
  case 'JOIN_PARTY_FULFILLED' :
    return Object.assign({}, state, {
      campaign: action.payload.body,
      joinError: false,
      partyCode: null
    });
  case 'JOIN_PARTY_REJECTED' :
    return Object.assign({}, state, {
      joinError: true
    });

  case 'GET_CHARACTER_PENDING' :
    return Object.assign({}, state, {
      character: null,
      campaign: null,
    });
  case 'GET_CHARACTER_FULFILLED' :
    return Object.assign({}, state, {
      character: action.payload,
      campaign: action.payload.dmID,
    });


  case 'GET_CHARACTER_REJECTED' :
    return Object.assign({}, state, {

    });

  case 'GET_ALL_CHARACTER_PENDING' :
    return Object.assign({}, state, {

    });
  case 'GET_ALL_CHARACTER_FULFILLED' :
    return Object.assign({}, state, {
      characters: action.payload.characters
    });
  case 'GET_ALL_CHARACTER_REJECTED' :
    return Object.assign({}, state, {

    });

  case 'GET_PARTY_MEMBERS_PENDING' :
    return Object.assign({}, state, {

    });
  case 'GET_PARTY_MEMBERS_FULFILLED' :
    return Object.assign({}, state, {
      campaign: action.payload
    });
  case 'GET_PARTY_MEMBERS_REJECTED' :
    return Object.assign({}, state, {

    });

  case 'UPDATE_CHARACTER_PENDING' :
    return Object.assign({}, state, {

    });
  case 'UPDATE_CHARACTER_FULFILLED' :
    return Object.assign({}, state, {
      character: action.payload
    });
  case 'UPDATE_CHARACTER_REJECTED' :
    return Object.assign({}, state, {

    });


  case 'DELETE_CHARACTER_PENDING' :
    return Object.assign({}, state, {

    });
  case 'DELETE_CHARACTER_FULFILLED' :
    return Object.assign({}, state, {

    });
  case 'DELETE_CHARACTER_REJECTED' :
    return Object.assign({}, state, {

    });

  case 'UPDATE_CHARACTER_NAME' :
    return Object.assign({}, state, {
      characterName: action.characterName
    });

  case 'SET_CHARACTERS' :
    return Object.assign({}, state, {
      characters: action.characters
    });

  case 'SET_SESSION_CHARACTER' :
    return Object.assign({}, state, {
      sessionCharacter: action.sessionCharacter
    });


  // Weapon
  case 'CREATE_WEAPON_PENDING' :
    return Object.assign({}, state, {

    });
  case 'CREATE_WEAPON_FULFILLED' :
    return Object.assign({}, state, {
      weaponName: null,
      diceValue: null,
      diceAmount: null,
      damageType: null
    });
  case 'CREATE_WEAPON_REJECTED' :
    return Object.assign({}, state, {

    });

  case 'GET_ALL_WEAPONS_PENDING' :
    return Object.assign({}, state, {

    });
  case 'GET_ALL_WEAPONS_FULFILLED' :
    return Object.assign({}, state, {
      weapons: action.payload

    });
  case 'GET_ALL_WEAPONS_REJECTED' :
    return Object.assign({}, state, {

    });

  case 'UPDATE_WEAPON_PENDING' :
    return Object.assign({}, state, {

    });
  case 'UPDATE_WEAPON_FULFILLED' :
    return Object.assign({}, state, {
      weaponName: null,
      diceValue: null,
      diceAmount: null,
      damageType: null
    });
  case 'UPDATE_WEAPON_REJECTED' :
    return Object.assign({}, state, {

    });

  case 'DELETE_WEAPON_PENDING' :
    return Object.assign({}, state, {

    });
  case 'DELETE_WEAPON_FULFILLED' :
    return Object.assign({}, state, {
      weapons: action.payload.body

    });
  case 'DELETE_WEAPON_REJECTED' :
    return Object.assign({}, state, {

    });

  case 'UPDATE_WEAPON_NAME' :
    return Object.assign({}, state, {
      weaponName: action.weaponName
    });

  case 'SET_WEAPONS' :
    return Object.assign({}, state, {
      weapons: action.weapons
    });

  case 'SET_WEAPON_ATTRIBUTES' :
    for(var i in action){

      if (i==='type') continue;
      return Object.assign({}, state, {
        [i]: action[i]
      });
    }
    break;


  // Armor
  case 'CREATE_ARMOR_PENDING' :
    return Object.assign({}, state, {

    });
  case 'CREATE_ARMOR_FULFILLED' :
    return Object.assign({}, state, {
      armorName: null
    });
  case 'CREATE_ARMOR_REJECTED' :
    return Object.assign({}, state, {

    });

  case 'GET_ALL_ARMOR_PENDING' :
    return Object.assign({}, state, {

    });
  case 'GET_ALL_ARMOR_FULFILLED' :
    return Object.assign({}, state, {
      armor: action.payload

    });
  case 'GET_ALL_ARMOR_REJECTED' :
    return Object.assign({}, state, {

    });

  case 'UPDATE_ARMOR_PENDING' :
    return Object.assign({}, state, {

    });
  case 'UPDATE_ARMOR_FULFILLED' :
    return Object.assign({}, state, {
      armorName: null
    });
  case 'UPDATE_ARMOR_REJECTED' :
    return Object.assign({}, state, {

    });

  case 'DELETE_ARMOR_PENDING' :
    return Object.assign({}, state, {

    });
  case 'DELETE_ARMOR_FULFILLED' :
    return Object.assign({}, state, {
      armor: action.payload.body

    });
  case 'DELETE_ARMOR_REJECTED' :
    return Object.assign({}, state, {

    });

  case 'UPDATE_ARMOR_NAME' :
    return Object.assign({}, state, {
      armorName: action.armorName
    });

  case 'SET_ARMOR' :
    return Object.assign({}, state, {
      armor: action.armor
    });

  // Spells

  case 'CREATE_SPELL_PENDING' :
    return Object.assign({}, state, {

    });
  case 'CREATE_SPELL_FULFILLED' :
    return Object.assign({}, state, {
      spellName: null,
      castingTime: null,
      range: null,
      duration: null,
      components: null,
      description: null
    });
  case 'CREATE_SPELL_REJECTED' :
    return Object.assign({}, state, {

    });

  case 'GET_ALL_SPELLS_PENDING' :
    return Object.assign({}, state, {

    });
  case 'GET_ALL_SPELLS_FULFILLED' :
    return Object.assign({}, state, {
      spells: action.payload

    });
  case 'GET_ALL_SPELLS_REJECTED' :
    return Object.assign({}, state, {

    });

  case 'UPDATE_SPELL_PENDING' :
    return Object.assign({}, state, {

    });
  case 'UPDATE_SPELL_FULFILLED' :
    return Object.assign({}, state, {
      spellName: null,
      castingTime: null,
      range: null,
      duration: null,
      components: null,
      description: null
    });
  case 'UPDATE_SPELL_REJECTED' :
    return Object.assign({}, state, {

    });

  case 'SET_SPELL_ATTRIBUTES' :
    for(var j in action){
      if (j==='type') continue;
      return Object.assign({}, state, {
        [j]: action[j]
      });
    }
    break;


  case 'DELETE_SPELL_PENDING' :
    return Object.assign({}, state, {

    });
  case 'DELETE_SPELL_FULFILLED' :
    return Object.assign({}, state, {
      spells: action.payload.body

    });
  case 'DELETE_SPELL_REJECTED' :
    return Object.assign({}, state, {

    });

  case 'UPDATE_SPELL_NAME' :
    return Object.assign({}, state, {
      spellName: action.spellName
    });

  case 'SET_SPELLS' :
    return Object.assign({}, state, {
      spells: action.spells
    });

  default:
    return state;
  }
}
