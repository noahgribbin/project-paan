'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class DeleteCharacter extends React.Component {
  constructor(props) {
    super(props)
    this.onClick= this.props.onClick.bind(this)
    // this.toggleHideModal = this.props.toggleHideModal.bind(this)
    this.stopPropagation = this.props.stopPropagation.bind(this)
    this.toggleHide= this.toggleHide.bind(this)
    this.state = {
    }
  }

  toggleHide(e){
    this.stopPropagation(e)
    this.props.toggleHideModal()
  }

  render() {
    return (
        <section className="update-weapon-form-shader"
                 onClick={this.toggleHide}
                 >
          <div className="delete-character-warning"
               onClick={this.props.stopPropagation}
               >
            <h1 className="delete-character-warning-text">This will permanently delete your character</h1>
            <h1 className="delete-character-warning-text">Are you sure?</h1>
          </div>
          <div onClick={this.onClick}
               className="delete-character-yes">yes</div>
          <div onClick={this.toggleHide}
               className="delete-character-no">no</div>
        </section>
    )
  }
}
