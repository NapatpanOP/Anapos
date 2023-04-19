import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import data from './data.json';
import './BrandsCard.css';

function BrandsCard() {

  const [likes, setLikes] = useState([]);

  const handleLike = (itemId) => {
    if (likes.includes(itemId)) {
      setLikes(likes.filter((id) => id !== itemId));
    } else {
      setLikes([...likes, itemId]);
    }
  };


  return (
    <div className="brand-list">
       <div className="card">
        {data.cards.map((item) => (
        <div className="card-item" key={item.id}>
          <div className="card-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="card-content">
            <div className="card-like" onClick={() => handleLike(item.id)}>
              <FontAwesomeIcon
                icon={faHeart}
                className={likes.includes(item.id) ? 'like-icon active' : 'like-icon'}
              />
              <p>{item.like}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default BrandsCard;
