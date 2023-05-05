import React, { useState } from 'react';
import data from './data.json';

const [selectedCategory, setSelectedCategory] = useState("All");

const filterCards = (category) => {
  if (category === "All") {
      return data.cards;
  } else {
      return data.filter((item) => item.category === category);
  }
};

return (
  <div>
      <div className="selector">
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="All">All</option>
              <option value="Category1">Category1</option>
              <option value="Category2">Category2</option>
          </select>
      </div>
      <div className="card-list">
          {filterCards(selectedCategory).map((item) => (
              <Card key={item.id} data={item} />
          ))}
      </div>
  </div>
);

export default filterCards;