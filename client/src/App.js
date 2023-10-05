// App.js
import './App.css';
import React, { Component } from "react";
import Main from './main';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar';
import './component/Footer.css'; 
import Login from './components/Login'; 
import Signup from './components/Signup';

// Import the new components
import Book from './components/Book';
import BookCard from './components/BookCard';
import BookList from './components/BookList';
import CategoryList from './components/CategoryList';

function App() {
  return (
    <div className="">
      <Router>
        {/* <Footer />  */}
        <Navbar />
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/" element={<Login />} /> 
          <Route path="/Signup" element={<Signup />} />
          {/* Add routes for the new components */}
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="/categories" element={<CategoryList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;