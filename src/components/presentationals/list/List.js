import React from 'react';
import Color from '../color/Color';
import './List.scss';

const ColorsList = ({ list, onDeleteColor = f => f, onRateColor = f => f }) =>
  <ul className='color-list'>
    {(!list.length) ?
      <h3>No colors were loaded ...</h3>
      :
      list.map((color, i) =>
        <Color key={i} item={color} onDelete={onDeleteColor} onRate={onRateColor} />
      )
    }
  </ul>

export default ColorsList;