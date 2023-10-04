// src/CategoryList/CategoryList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function CategoryList() {
  return (
    <div>
      <h2>Categories</h2>
      {/* category mapping */}
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
        <li className="list-group-item">
          <Link to="/category/6">Romance</Link>
          <li className="list-group-item">
          <Link to="/category/7">Educational</Link>
        </li>
        <li className="list-group-item">
          <Link to="/category/8">Art & Design</Link>
        </li>
        <li className="list-group-item">
          <Link to="/category/9">Music</Link>
        </li>
        <li className="list-group-item">
          <Link to="/category/10">History</Link>
        </li>
        <li className="list-group-item">
          <Link to="/category/11">Health & Wellness</Link>
        </li>
        </li>
      </ul>
    </div>
  );
}

export default CategoryList;
