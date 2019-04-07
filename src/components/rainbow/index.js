import React from 'react';
import './index.scss'
import ColorSquare from './colorsquare';

const colorList = ['aqua', 'darkGray', 'fuchsia', 'whiteSmoke', 'cornflowerblue', 'powderblue'];

const Rainbow = () => 
  <div>
    {colorList.map(item => <ColorSquare colorList={colorList} key={item} />)}
  </div>

export default Rainbow;
