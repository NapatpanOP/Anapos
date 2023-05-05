import React, { useState, useEffect } from 'react';
import data from './components/BrandsCard/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './TypesWebPage.css';

function Card() {

  const [likes, setLikes] = useState([]);

  const handleLike = (itemId) => {
    if (likes.includes(itemId)) {
      setLikes(likes.filter((id) => id !== itemId));
    } else {
      setLikes([...likes, itemId]);
    }
  };

  const [cards, setCards] = useState([]);
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    setCards(data.cards);
  }, []);

  const handleFilter = (event) => {
    setSelectedType(event.target.value);
  };

  const filteredCards = cards.filter((card) => {
    if (selectedType === 'All') {
      return true;
    } else {
      return card.type === selectedType;
    }
  });

  return (
    <div>
      <div className="text-head ">
        <p>Types Of Websites</p>
      </div>

      <select onChange={handleFilter}>
        <option value="All">All</option>
        <option value="Portal">Portal</option>
        <option value="New">New</option>
        <option value="Business">Business</option>
      </select>

      <div className="card-container">
        {filteredCards.map((card) => (
          <div className="card-item" key={card.id}>
          <div className="card-image">
            <img src={card.image} alt={card.title} />
          </div>
          <div className="card-content">
            <div className="card-like" onClick={() => handleLike(card.id)}>
              <FontAwesomeIcon
                icon={faHeart}
                className={likes.includes(card.id) ? 'like-icon active' : 'like-icon'}
              />
              <p>{card.like}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
