// src/CategoryList/CategoryList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function CategoryList() {
  return (
    <div>
      <h2>Categories</h2>
      {/* You can remove the unnecessary category mapping */}
      {/* No need to reference the 'categories' array */}
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/category/1">Fiction</Link>
        </li>
        <li className="list-group-item">
          <Link to="/category/2">Non-Fiction</Link>
        </li>
        <li className="list-group-item">
          <Link to="/category/3">Mystery</Link>
        </li>
        <li className="list-group-item">
          <Link to="/category/4">Science Fiction</Link>
        </li>
        <li className="list-group-item">
          <Link to="/category/5">Fantasy</Link>
        </li>
      </ul>
    </div>
  );
}

export default CategoryList;
