
// App.js
import './App.css';
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter as Router
import Main from './component/Main';
import Navbar from './component/NavBar'; 
// import Footer from './component/Footer';
// import './component/Footer.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/Navbar.css'; 
import './component/Footer.css'; 
import Login from './components/Login'
import Signup from './components/Signup';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;