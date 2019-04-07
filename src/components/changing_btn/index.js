import React, { Component } from 'react';
import './index.scss';

class ChangingBtn extends Component{
  constructor(props){
    super(props);
    this.state = {
      clicks : 0,
      buttonClass: 'aqua'
    }
  }
  getBackgroundColor = (clickNum) => {
    switch(clickNum % 3){
      case 0: 
        return 'fuchsia'
      case 1: 
        return 'aqua'
      default:
        return 'darkGray'
    }
  }
  handleClick = () => {
    const {clicks} = this.state;
    const color = this.getBackgroundColor(Math.floor((Math.random()*3) + 1));

    this.setState({
      clicks: clicks + 1,
      buttonClass : color
    });
  }
  render(){
    const {clicks, buttonClass} = this.state;
    return (
      <div>
        <button className={buttonClass} onClick={this.handleClick}>don't click this</button>
        <span>{clicks}</span>
      </div>
    );
  }
}

export default ChangingBtn;
