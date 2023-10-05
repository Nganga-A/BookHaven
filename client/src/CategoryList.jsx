// src/CategoryList/CategoryList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function CategoryList() {
  return (
    <div className="container">
      <h2 className="mt-4">Categories</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/category/1">Fiction</Link>
        </li>
        <li className="list-group-item">
          <Link to="/category/2">Science Fiction</Link>
        </li>
        <li className="list-group-item">
          <Link to="/category/3">Non Fiction</Link>
        </li>
        <li className="list-group-item">
          <Link to="/category/4">Mystery</Link>
        </li>
        <li className="list-group-item">
          <Link to="/category/5">Fantasy</Link>
        </li>
        <li className="list-group-item">
          <Link to="/category/6">Romance</Link>
        </li>
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
      </ul>
    </div>
  );
}

export default CategoryList;