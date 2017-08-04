'use strict'

import React from 'react';
import { connect } from 'react-redux';
import store from '../store.js';


export class Home extends React.Component {


  render() {
    console.log('Home', this);
    return (
      <h1>Home</h1>
    )
  }
}
