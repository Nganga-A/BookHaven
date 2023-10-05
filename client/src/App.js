// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddBook from './AddBook';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
           
            <li>
              <Link to="/add-book">Add Books</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
         
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
