import React, { Component } from 'react'
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       color : 'red',
       fontSize : 12,
    }
  }

  onSetColor = (params) => {
    this.setState({
      color : params,
    })
  }

  onSetFontSize = (size) => {
    if (this.state.fontSize + size >= 8 && this.state.fontSize + size <= 36) {
      this.setState({
        fontSize : this.state.fontSize + size,
      })
    };
  };

  onResetSetting = () => {
    this.setState({
      color : 'red',
      fontSize : 12,
    })
  };
  
  render() {
    return (
      <div className="container mt-50">
      <div className="row">
        <ColorPicker 
          color={ this.state.color } 
          onReceiveColor={ this.onSetColor } 
        />
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <SizeSetting
            fontSize={ this.state.fontSize }
            onReceiveFontSize={ this.onSetFontSize }
          />
          <Reset onReset={ this.onResetSetting } />
        </div>
        <Result 
          color={this.state.color}
          fontSize={this.state.fontSize}
        />
        
      </div>
    </div>
    )
  }
}

export default App

