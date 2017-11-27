'use strict';

import React from 'react';
import { render } from 'react-dom'
import PropTypes from 'prop-types'

import  { DeleteCharacter }  from './deleteCharacter.jsx'

export default class DeleteCharacterButton extends React.Component {
  constructor(props) {
    super(props)
    this.toggleShowModal = this.toggleShowModal.bind(this);
    this.toggleHideModal = this.toggleHideModal.bind(this);
    this.stopPropagation = this.stopPropagation.bind(this);
    this.state={
      showDeleteModal: false
    }
  }

   toggleShowModal() {
    console.log('hit');
     this.setState({showDeleteModal: true })
    document.body.style.overflow = 'hidden';
    console.log(this.state);
  }
   toggleHideModal() {
    console.log('hit');
    console.log(this);
    this.setState({showDeleteModal: false })
    document.body.style.overflow = 'visible';
    console.log(this.state);
  }

  stopPropagation(e) {
    e.stopPropagation()
  }

  render() {
    return (
      <section className="delete-character-holder">
        <h1 onClick={this.toggleShowModal}
            className="delete-character-title">
          Delete character
        </h1>
        {this.state.showDeleteModal ?
          <DeleteCharacter
            onClick={this.props.onClick}
            toggleHideModal={this.toggleHideModal}
            stopPropagation={this.stopPropagation}
          />
        :null}
      </section>
    )
  }
}
