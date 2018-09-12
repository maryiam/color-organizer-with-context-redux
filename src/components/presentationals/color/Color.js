import React from 'react';
import Rating from '../StarsRating/Rating';
import Time from '../time/Time';
import './Color.scss';

const Color = ({ item, onDelete, onRate }) => {
  const { id, title, color, rating, timestamp } = item;
  return (
    <li className='color-box'>
      <button className='button-close' onClick={() => onDelete(id)}>X</button>
      <h2>{title}</h2>
      <Time timestamp={timestamp} />
      <div className='color-bg' style={{ 'backgroundColor': color }}></div>
      <Rating rate={rating} onRate={rate => onRate(id, rate)} />
    </li>
  );
}

export default Color;
