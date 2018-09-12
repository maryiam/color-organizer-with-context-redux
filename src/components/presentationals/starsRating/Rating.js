import React from 'react';
import './Rating.scss';

const Rating = ({ rate = 0, maxRate = 5, onRate }) => {
  return (
    <div>
      <div className='rating-wrapper'>
         {
        [...Array(maxRate)].map((star, key) =>
          <div key={key} className={key < rate ? 'star selected' : 'star'}  onClick={() => onRate(key + 1)}></div>
        )
      }
      </div>
     
      <p>{rate} of {maxRate} stars</p>
    </div>
  )
};

export default Rating;