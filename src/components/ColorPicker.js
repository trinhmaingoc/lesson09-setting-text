import React, { Component } from 'react'

export class ColorPicker extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       colors: ['red', 'green', 'blue', 'yellow', '#ccc']
    }
  }

  setActiveColor = (color) => {
    this.props.onReceiveColor(color)
  }
  
  render() {
    const elmColors = this.state.colors.map((color, index) => {
      return (
        <span 
          key={index} 
          style={{backgroundColor:color}}
          className={this.props.color===color ? 'active' : ''}
          onClick={ () => this.setActiveColor(color) }
        ></span>
      )
    });
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Color Picker</h3>
          </div>
          <div className="panel-body">
            {elmColors}
            <hr />
          </div>
        </div>
      </div>
    )
  }
}

export default ColorPicker;
