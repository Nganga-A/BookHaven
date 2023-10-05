import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context.'; // Remove the trailing period
import './App.css';
import Home from './pages/Home'; // Update import path
import About from './pages/About'; // Update import path
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import './components/Footer.css'; 
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css'; 


function App() {
  return (
    <AppProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </AppProvider>
  );
}

export default App;
