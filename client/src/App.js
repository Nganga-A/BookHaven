// App.js
import './App.css';
<<<<<<< HEAD
import React, { Component } from "react";
import Main from './main';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======

>>>>>>> 1356ab187f0104bc9f71b95d7c84e32778a318cb
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar';
import './component/Footer.css'; 
import Login from './components/Login'; 
import Signup from './components/Signup';
import AddBook from './components/AddBook'

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
<<<<<<< HEAD
          <Route path="/Signup" element={<Signup />} />
          {/* Add routes for the new components */}
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="/categories" element={<CategoryList />} />
=======
          <Route path="/Signup" element={<Signup />} /> 
          <Route path="/add-book" element={<AddBook />} />
>>>>>>> 1356ab187f0104bc9f71b95d7c84e32778a318cb
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;