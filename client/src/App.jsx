// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryList from './CategoryList';
import BookList from './BookList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/category/:categoryId" element={<BookList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;