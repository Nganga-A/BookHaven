// App.js
import './App.css';
import React, { useState } from 'react'; // Import useState
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom'; // Import Navigate
import Main from './component/Main';
import Navbar from './component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/Navbar.css';
import './component/Footer.css';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = () => {
    // Replace this with your actual authentication logic
    // Set isLoggedIn to true if login is successful
    setIsLoggedIn(true);
  };

  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
