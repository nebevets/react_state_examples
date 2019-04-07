import React, {Component} from 'react';
import './index.scss'

class ColorSquare extends Component{
  constructor(props){
    super(props);
    this.colorList = props.colorList;
    this.state = {
      hovers: 0,
      sqClass: 'aqua'
    }
  }
  handleMouseEnter = () => {
    const {hovers} = this.state;
    let newHovers;
    hovers > this.colorList.length
      ? newHovers = 0
      : newHovers = hovers + 1
    this.setState({
      hovers: newHovers,
      sqClass: this.colorList[newHovers]
    });
  }
  render(){
    const {sqClass} = this.state;
    return (
      <div className={`square ${sqClass}`} onMouseEnter={this.handleMouseEnter}></div>
    );  
  }
}

export default ColorSquare;
