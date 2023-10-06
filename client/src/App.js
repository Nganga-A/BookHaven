import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context'; // Removed the trailing period
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar/Navbar'; 
import Footer from './components/Footer';
import AddBook from './components/AddBook';
import CategoryList from './components/CategoryList';
import Favourites from './components/Favourites';
import Header from './components/Header/Header';





function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="book" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/category/:categoryId" element={<CategoryList />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;