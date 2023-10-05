import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import CategoryList from './components/CategoryList';
import Favorites from './components/Favourites';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/category/:categoryId" element={<CategoryList />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;