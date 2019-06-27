import React, {Component} from 'react';
import './index.scss'
import {randomColor} from './randcolor';

class ColorSquare extends Component{
  constructor(props){
    super(props);
    this.state = {
      color: randomColor()
    }
  }
  handleMouseEnter(){
    const newColor = randomColor();
    this.setState({
      color: newColor
    });
  }
  render(){
    const {color} = this.state;
    return (
      <div className="square" style={{'backgroundColor': color}} onMouseEnter={this.handleMouseEnter.bind(this)}></div>
    );  
  }
}

export default ColorSquare;
