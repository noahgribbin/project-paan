'use strict';

var request = require('superagent');

// Characters
  // Create
export function createCharacter(data) {
  return  {
    type: 'CREATE_CHARACTER',
    payload: request
    .post(`${'https://dungeon-manager-be.herokuapp.com'}/api/character`)
    .set({ authorization: `Bearer ${data.token}`})
    .send(data.character)
    .then(res => {
      var response = JSON.parse(res.text)
      return response;
    })
  };
}

export function joinParty(data) {
  console.log('inActionData.id', data.id);
  return {
    type: 'JOIN_PARTY',
    payload: request
    .post(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/${data.code}`)
    .set({ authorization: `Bearer ${data.token}`})
    .send({id:data.id})
    .then( res => {
      console.log('join party res', res);
      return res
    })
  }
}
// Get
export function getCharacter(data) {
  return {
    type: 'GET_CHARACTER',
    payload: request
    .get(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/${data.id}`)
    .set({ authorization: `Bearer ${data.token}`})
    .then( res => {
      console.log('res.body: ',res.body);
      return res.body;
    })
  }
}

export function setCharacterAttributes(data) {
  return {
    type: 'SET_SPELL_ATTRIBUTES',
    [data.property]: data.value
  }
}

export function getAllCharacters(data) {
  return {
    type: 'GET_ALL_CHARACTER',
    payload: request
    .get(`${'https://dungeon-manager-be.herokuapp.com'}/api/characters/${data.id}`)
    .set({ authorization: `Bearer ${data.token}`})
    .then( res => {
      return res.body;
    })
  }
}

export function getPartyMembers(data) {
  return {
    type: 'GET_PARTY_MEMBERS',
    payload: request
    .get(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/party/${data.id}`)
    .set({ authorization: `Bearer ${data.token}`})
    .then(res => {
      return res.body;
    })
  }
}

export function updateCharacter(data) {
  return {
    type: 'UPDATE_CHARACTER',
    payload: request
    .put(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/${data.id}`)
    .set({ authorization: `Bearer ${data.token}`})
    .send(data.character)
    .then( res => {
      console.log('updateCharacter res.body: ',res.body);
      return res.body;
    })
  }
}

export function deleteCharacter(data) {
  return {
    type: 'DELETE_CHARACTER',
    payload: request
    .delete(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/${data.id}`)
    .set({ authorization: `Bearer ${data.token}`})
    .then( res => {
      console.log('deleteCharacter res.body', res.body)
    })
  }
}
// Plain Actions
export function updateCharacterName(data) {
  console.log('updateCharacterName action:',data);
  return {
    type: 'UPDATE_CHARACTER_NAME',
    characterName: data
  }
}

export function setSessionCharacter(data) {
  return {
    type: 'SET_SESSION_CHARACTER',
    sessionCharacter: data
  }
}


export function setCharacters(data) {
  return {
    type: 'SET_WEAPONS',
    characters: data
  }
}
// later


// Weapon

export function createWeapon(data) {
  return {
    type: 'CREATE_WEAPON',
    payload: request
    .post(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/${data.id}/weapon`)
    .set({ authorization: `Bearer ${data.token}`})
    .send(data.weapon)
    .then( res => {
      console.log(res);
      return res;
    })
  }
}
// export function create(data, type) {
//   var upperType = type.toUpperCase()
//   return {
//     type: 'CREATE_'+type,
//     payload: request
//     .post(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/${data.id}/${type}`)
//     .set({ authorization: `Bearer ${data.token}`})
//     .send(data.type)
//     .then( res => {
//       console.log(res);
//       return res;
//     })
//   }
// }
export function getAllWeapons(data) {
  return {
    type: 'GET_ALL_WEAPONS',
    payload: request
    .get(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/${data.id}/weapons`)
    .set({ authorization: `Bearer ${data.token}`})
    .then( res => {
      console.log('GET_ALL_WEAPONS res', res);
      return res.body
    })
  }
}

export function deleteWeapon(data) {
  return {
    type: 'DELETE_WEAPON',
    payload: request
    .delete(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/weapon/${data.id}`)
    .set({ authorization: `Bearer ${data.token}`})
    .then( res => {
      console.log('deleteWeapon res: ', res);
      return res
    })
  }
}

export function updateWeapon(data) {

  return {
    type: 'UPDATE_WEAPON',
    payload: request.put(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/weapon/${data.id}`)
    .set({ authorization: `Bearer ${data.token}`})
    .send(data.weapon)
    .then( res => {
      console.log('updateWeapon res: ', res);
      return res;
    })
  }
}

export function updateWeaponName(data) {
  return {
    type: 'UPDATE_WEAPON_NAME',
    weaponName: data
  }
}

export function setWeapons(data) {
  return {
    type: 'SET_WEAPONS',
    weapons: data
  }
}
export function setWeaponAttributes(data) {

  return {
    type: 'SET_WEAPON_ATTRIBUTES',
    [data.type]: data.value
  }
}

// Armor
export function createArmor(data) {
  return {
    type: 'CREATE_ARMOR',
    payload: request
    .post(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/${data.id}/armor`)
    .set({ authorization: `Bearer ${data.token}`})
    .send(data.armor)
    .then( res => {
      console.log(res);
      return res;
    })
  }
}

export function getAllArmor(data) {
  return {
    type: 'GET_ALL_ARMOR',
    payload: request
    .get(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/${data.id}/armor`)
    .set({ authorization: `Bearer ${data.token}`})
    .then( res => {
      console.log('GET_ALL_ARMOR res', res);
      return res.body
    })
  }
}

export function deleteArmor(data) {
  return {
    type: 'DELETE_ARMOR',
    payload: request
    .delete(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/armor/${data.id}`)
    .set({ authorization: `Bearer ${data.token}`})
    .then( res => {
      console.log('deleteArmor res: ', res);
      return res
    })
  }
}

export function updateArmor(data) {

  return {
    type: 'UPDATE_ARMOR',
    payload: request.put(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/armor/${data.id}`)
    .set({ authorization: `Bearer ${data.token}`})
    .send(data.armor)
    .then( res => {
      console.log('updateArmor res: ', res);
      return res;
    })
  }
}

export function updateArmorName(data) {
  return {
    type: 'UPDATE_ARMOR_NAME',
    armorName: data
  }
}


export function setArmor(data) {
  return {
    type: 'SET_ARMOR',
    armor: data
  }
}

// Spells
export function createSpell(data) {
  return {
    type: 'CREATE_SPELL',
    payload: request
    .post(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/${data.id}/spell`)
    .set({ authorization: `Bearer ${data.token}`})
    .send(data.spell)
    .then( res => {
      console.log(res);
      return res;
    })
  }
}
export function getAllSpells(data) {
  return {
    type: 'GET_ALL_SPELLS',
    payload: request
    .get(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/${data.id}/spells`)
    .set({ authorization: `Bearer ${data.token}`})
    .then( res => {
      console.log('GET_ALL_SPELL res', res);
      return res.body
    })
  }
}

export function deleteSpell(data) {
  return {
    type: 'DELETE_SPELL',
    payload: request
    .delete(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/spell/${data.id}`)
    .set({ authorization: `Bearer ${data.token}`})
    .then( res => {
      console.log('deleteSpell res: ', res);
      return res
    })
  }
}

export function updateSpell(data) {

  return {
    type: 'UPDATE_SPELL',
    payload: request.put(`${'https://dungeon-manager-be.herokuapp.com'}/api/character/spell/${data.id}`)
    .set({ authorization: `Bearer ${data.token}`})
    .send(data.spell)
    .then( res => {
      console.log('updateSpell res: ', res);
      return res;
    })
  }
}

export function setSpellAttributes(data) {

  return {
    type: 'SET_SPELL_ATTRIBUTES',
    [data.property]: data.value
  }
}

export function updateSpellName(data) {
  return {
    type: 'UPDATE_SPELL_NAME',
    spellName: data
  }
}
export function setJoinCode(data) {
  return {
    type: 'SET_JOIN_CODE',
    partyCode: data
  }
}

export function setSpells(data) {
  return {
    type: 'SET_SPELLS',
    spells: data
  }
}

// other
export function toggleUpdate() {
  return {
    type: 'TOGGLE_UPDATE',
    updating: true
  }
}
