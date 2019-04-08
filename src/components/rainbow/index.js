import React from 'react';
import './index.scss'
import ColorSquare from './colorsquare';

const colorList = ['aqua', 'darkGray', 'fuchsia', 'whiteSmoke', 'cornflowerblue', 'powderblue'];
const generateSquares = (amount) => {
  let count = 0;
  const squaresGenerated = [];
  while (count < amount){
    squaresGenerated.push(<ColorSquare colorList={colorList} key={count++} />);
  }
  return squaresGenerated;
};

const Container = () =>
  <div>
    {generateSquares(50)}
  </div>

export default Container;
