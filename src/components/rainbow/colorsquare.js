import React, {Component} from 'react';
import './index.scss'
import {randomColor} from './randcolor';

class ColorSquare extends Component{
  constructor(props){
    super(props);
    this.interval = null;
    this.state = {
      color: randomColor()
    }
  }
  componentDidMount(){
    if(!this.interval){
      this.interval = setInterval(this.handleMouseEnter.bind(this), Math.floor(Math.random() * (10000-1000+1))+1000);
      return;
    }
    clearInterval(this.interval);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
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
      <div className="square" style={{'backgroundColor': color}}></div>
    );  
  }
}

export default ColorSquare;
