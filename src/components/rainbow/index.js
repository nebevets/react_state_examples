import React from 'react';
import './index.scss'
import ColorSquare from './colorsquare';

const generateSquares = (amount) => {
  let count = 0;
  const squaresGenerated = [];
  while (count < amount){
    squaresGenerated.push(<ColorSquare key={count++} />);
  }
  return squaresGenerated;
};

const Container = () =>
  <div>
    {generateSquares(20)}
  </div>

export default Container;
