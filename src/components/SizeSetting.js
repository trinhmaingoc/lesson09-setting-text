import React, { Component } from 'react'

export class SizeSetting extends Component {

  setFontSize = (size) => {
    this.props.onReceiveFontSize(size);
  }
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Size : { this.props.fontSize }</h3>
        </div>
        <div className="panel-body">
          <button type="button" className="btn btn-success" onClick={ () => this.setFontSize(2) }>Tăng</button> &nbsp;
          <button type="button" className="btn btn-success" onClick={ () => this.setFontSize(-2) }>Giảm</button>
        </div>
      </div>
    )
  }
}

export default SizeSetting;
