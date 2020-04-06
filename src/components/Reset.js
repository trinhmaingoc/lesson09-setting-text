import React, { Component } from 'react'

export class Reset extends Component {

  onClick = () => {
    this.props.onReset();
  };

  render() {
    return (
      <button type="button" className="btn btn-primary" onClick={ this.onClick }>Reset</button>
    )
  }
}

export default Reset;
