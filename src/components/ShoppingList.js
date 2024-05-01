import React, { useState } from 'react';


const Filter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <select value={selectedCategory} onChange={onCategoryChange}>
      <option value="">All Categories</option>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};


const ShoppingList = ({ items }) => {
  const categories = ["All", "Produce", "Dairy", "Dessert"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
