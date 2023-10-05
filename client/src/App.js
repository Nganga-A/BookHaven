// App.js
import './App.css';
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter as Router
import Main from './components/Main';
import Navbar from './components/NavBar'; 
// import Footer from './component/Footer';
// import './component/Footer.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/Navbar.css'; 
import './component/Footer.css'; 
import Login from './components/Login'
import Signup from './components/Signup';
import AddBook from './components/AddBook'

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
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;



