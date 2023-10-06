import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function CategoryList() {
  // State variable to store the list of categories
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch the list of categories from the Flask API
    axios.get('/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="mt-4">Categories</h2>
      <ul className="list-group">
        {categories.map(category => (
          <li key={category.id} className="list-group-item">
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;