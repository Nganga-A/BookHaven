// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './FaveList';

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