// Category.js
import React from 'react';

const Category = ({ match }) => {
  const { category } = match.params;

  // Fetch videos based on category

  return (
    <div className="container">
      <h2 className="section-heading">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      {/* Videos in this category */}
    </div>
  );
};

export default Category;
