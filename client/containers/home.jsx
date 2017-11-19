'use strict'

import React from 'react';
import { connect } from 'react-redux';
import store from '../store.js';

import  {CharacterHome} from '../components/characterHome.jsx'
import  {DmHome} from '../components/dmHome.jsx'
import  {Navbar} from '../components/navbar.jsx'
import { history } from '../entry.jsx';

import { getAllCharacters, setCharacters, getAllArmor } from '../actions/characterActions.js';
import { getAllDms } from '../actions/dmActions.js';


export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.dmOnClick = this.dmOnClick.bind(this);
    this.characterOnClick = this.characterOnClick.bind(this);
  }

  dmOnClick(e) {
    console.log('onClick DM');
    const data = {
      id: store.getState().profileReducer.profileID,
      token: store.getState().userReducer.token
    }
    store.dispatch(getAllDms(data))
    .then(dm => {
      console.log(dm);
    })
    .then(() => {

      history.push('./dm')
    })
  }

  characterOnClick(e) {
    const data = {
      id: store.getState().profileReducer.profileID,
      token: store.getState().userReducer.token
    }
    store.dispatch(getAllCharacters(data))
    .then(() => {
      history.push('./player')

    })
  }



  render() {
    return (
      <section>
        <Navbar />
        <DmHome onClick={this.dmOnClick}/>
        {/* <CharacterHome onClick={this.characterOnClick}/> */}
      </section>
    )
  }
}
