'use strict';

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class DeleteCharacter extends React.Component {
  constructor(props) {
    super(props)
    this.onClick= this.props.onClick.bind(this)
    this.toggleShow= this.toggleShow.bind(this)
    this.state = {
      showDeleteModal: false
    }
  }
  toggleShow() {
    this.setState(prevState => ({
      showDeleteModal:!prevState.showDeleteModal
    }));
  }

  render() {
    return (
      <section>
        <div onClick={this.toggleShow}>Delete character</div>
        {this.state.showDeleteModal  ?
        <div>
          <h1>This will permanently delete your campaign</h1>
          <h2>Are you sure?</h2>
          <div onClick={this.onClick}>yes</div>
          <div onClick={this.toggleShow}>no</div>
        </div>
        :null}
    </section>
    )
  }
}
