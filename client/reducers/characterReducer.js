'use strict';

const initialState = {
  characterName: '',
  sessionCharacter: '',
  campaignName: '',
  id: '',
  weapons:[],
  character: {},
  campaign: {}
}

export default function characterReducer(state=initialState, action) {
  switch(action.type) {
    case 'CREATE_CHARACTER_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'CREATE_CHARACTER_FULFILLED' :
    console.log(action);
    return Object.assign({}, state, {
      characterName: action.payload.character.characterName,
      id: action.payload.character._id,
      // update state
    })
    case 'CREATE_CHARACTER_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'SET_JOIN_CODE' :
    console.log(action);
    return Object.assign({}, state, {
      partyCode: action.partyCode
    })
    case 'JOIN_PARTY_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // campaign: null
      // update state
    })
    case 'JOIN_PARTY_FULFILLED' :
    console.log(action);
    return Object.assign({}, state, {
      campaign: action.payload.body,
      joinError: false,
      partyCode: null
      // update state
    })
    case 'JOIN_PARTY_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      joinError: true
    })

    case 'GET_CHARACTER_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
      character: null,
      campaign: null,
      // characterName: null,
      // id: null,
      // campaignName: null,
      // weaponName:null,
      // armorName:null,
      // spellName:null,
      // spells:null,
      // armor: null,
      // weapons: null,
      // ac:null,
      // hp:null,
      // lv:null,
      // strength:null,
      // dexterity:null,
      // constitution:null,
      // intelligence:null,
      // wisdom:null,
      // charisma:null,
      // partyCode:null,
      // campaignMembers: null,
      // LOOKATME: null,
    })
    case 'GET_CHARACTER_FULFILLED' :
      console.log(action);
      console.log('get fulfilled',action.payload);
      console.log('HAS DM');
      return Object.assign({}, state, {
        character: action.payload,
        campaign: action.payload.dmID,
      })


    case 'GET_CHARACTER_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })

    case 'GET_ALL_CHARACTER_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'GET_ALL_CHARACTER_FULFILLED' :
    console.log(action);
    return Object.assign({}, state, {
      characters: action.payload.characters
    })
    case 'GET_ALL_CHARACTER_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })

    case 'GET_PARTY_MEMBERS_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'GET_PARTY_MEMBERS_FULFILLED' :
    console.log(action);
    return Object.assign({}, state, {
      campaign: action.payload
    })
    case 'GET_PARTY_MEMBERS_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })

    case 'UPDATE_CHARACTER_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'UPDATE_CHARACTER_FULFILLED' :
    console.log(action);
    console.log(action.payload);
    return Object.assign({}, state, {
      character: action.payload
    })
    case 'UPDATE_CHARACTER_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })


    case 'DELETE_CHARACTER_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'DELETE_CHARACTER_FULFILLED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'DELETE_CHARACTER_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })

    case 'UPDATE_CHARACTER_NAME' :
    console.log(action);
    return Object.assign({}, state, {
      characterName: action.characterName
    })

    case 'SET_CHARACTERS' :
    console.log(action);
    return Object.assign({}, state, {
      characters: action.characters
    })

    case 'SET_SESSION_CHARACTER' :
    console.log(action);
    return Object.assign({}, state, {
      sessionCharacter: action.sessionCharacter
    })


    // Weapon
    case 'CREATE_WEAPON_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'CREATE_WEAPON_FULFILLED' :
    console.log(action);
    console.log(action.payload);
    return Object.assign({}, state, {
        weaponName: null,
        diceValue: null,
        diceAmount: null,
        damageType: null
    })
    case 'CREATE_WEAPON_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })

    case 'GET_ALL_WEAPONS_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'GET_ALL_WEAPONS_FULFILLED' :
    console.log(action);
    console.log(action.payload);
    return Object.assign({}, state, {
      weapons: action.payload
      // update state
    })
    case 'GET_ALL_WEAPONS_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })

    case 'UPDATE_WEAPON_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'UPDATE_WEAPON_FULFILLED' :
    console.log(action);
    console.log(action.payload);
    return Object.assign({}, state, {
      weaponName: null,
      diceValue: null,
      diceAmount: null,
      damageType: null
    })
    case 'UPDATE_WEAPON_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })

    case 'DELETE_WEAPON_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'DELETE_WEAPON_FULFILLED' :
    console.log(action);
    console.log(action.payload);
    return Object.assign({}, state, {
      weapons: action.payload.body
      // update state
    })
    case 'DELETE_WEAPON_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })

    case 'UPDATE_WEAPON_NAME' :
    console.log(action);
    return Object.assign({}, state, {
      weaponName: action.weaponName
    })

    case 'SET_WEAPONS' :
    console.log(action);
    return Object.assign({}, state, {
      weapons: action.weapons
    })

    case 'SET_WEAPON_ATTRIBUTES' :
    console.log(action);
    for(var i in action){
      console.log('i',i); // console.log( key
      console.log('action[i]',action[i]); //alerts key's value
      if (i==="type") continue
      return Object.assign({}, state, {
        [i]: action[i]
      })
    }



    // Armor
    case 'CREATE_ARMOR_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'CREATE_ARMOR_FULFILLED' :
    console.log(action);
    console.log(action.payload);
    return Object.assign({}, state, {
        armorName: null
    })
    case 'CREATE_ARMOR_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })

    case 'GET_ALL_ARMOR_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'GET_ALL_ARMOR_FULFILLED' :
    console.log(action);
    console.log(action.payload);
    return Object.assign({}, state, {
      armor: action.payload
      // update state
    })
    case 'GET_ALL_ARMOR_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })

    case 'UPDATE_ARMOR_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'UPDATE_ARMOR_FULFILLED' :
    console.log(action);
    console.log(action.payload);
    return Object.assign({}, state, {
      armorName: null
    })
    case 'UPDATE_ARMOR_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })

    case 'DELETE_ARMOR_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'DELETE_ARMOR_FULFILLED' :
    console.log(action);
    console.log(action.payload);
    return Object.assign({}, state, {
      armor: action.payload.body
      // update state
    })
    case 'DELETE_ARMOR_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })

    case 'UPDATE_ARMOR_NAME' :
    console.log(action);
    return Object.assign({}, state, {
      armorName: action.armorName
    })

    case 'SET_ARMOR' :
    console.log(action);
    return Object.assign({}, state, {
      armor: action.armor
    })

    // Spells

    case 'CREATE_SPELL_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'CREATE_SPELL_FULFILLED' :
    console.log(action);
    console.log(action.payload);
    return Object.assign({}, state, {
      spellName: null,
      castingTime: null,
      range: null,
      duration: null,
      components: null,
      description: null
    })
    case 'CREATE_SPELL_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })

    case 'GET_ALL_SPELLS_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'GET_ALL_SPELLS_FULFILLED' :
    console.log(action);
    console.log(action.payload);
    return Object.assign({}, state, {
      spells: action.payload
      // update state
    })
    case 'GET_ALL_SPELLS_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })

    case 'UPDATE_SPELL_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'UPDATE_SPELL_FULFILLED' :
    console.log(action);
    console.log(action.payload);
    return Object.assign({}, state, {
      spellName: null,
      castingTime: null,
      range: null,
      duration: null,
      components: null,
      description: null
    })
    case 'UPDATE_SPELL_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })

    case 'SET_SPELL_ATTRIBUTES' :
    console.log(action);
    for(var i in action){
      console.log('i',i); // console.log( key
      console.log('action[i]',action[i]); //alerts key's value
      if (i==="type") continue
      return Object.assign({}, state, {
        [i]: action[i]
      })
    }


    case 'DELETE_SPELL_PENDING' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })
    case 'DELETE_SPELL_FULFILLED' :
    console.log(action);
    console.log(action.payload);
    return Object.assign({}, state, {
      spells: action.payload.body
      // update state
    })
    case 'DELETE_SPELL_REJECTED' :
    console.log(action);
    return Object.assign({}, state, {
      // update state
    })

    case 'UPDATE_SPELL_NAME' :
    console.log(action);
    return Object.assign({}, state, {
      spellName: action.spellName
    })

    case 'SET_SPELLS' :
    console.log(action);
    return Object.assign({}, state, {
      spells: action.spells
    })

    default:
    return state
  }
}
