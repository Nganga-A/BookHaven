import { useState, useEffect } from 'react';
import api from './Api';
import { Link } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch the list of categories from the Flask API
    api.get('/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="mt-4">Categories Library</h2>
      <ul className="list-group">
        {categories.map(category => (
          <li key={category.id} className="list-group-item">
            <Link to={`/category/${category.id}`} className="text-decoration-none text-dark">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;