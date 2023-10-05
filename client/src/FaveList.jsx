// src/components/BookList.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookList() {
  const { categoryId } = useParams();
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    // Fetch book data from the Google Books API
    const apiKey = 'AIzaSyAe_jl7NUtfnv4HMwGm5YaYAD8F8D2XiU0';
    const query = 'Harry Potter'; // Your search query
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.items) {
          // Extract relevant book data (title, authors, image links)
          const bookData = data.items.map(item => {
            const volumeInfo = item.volumeInfo;
            return {
              id: item.id,
              title: volumeInfo.title,
              authors: volumeInfo.authors,
              image: volumeInfo.imageLinks?.thumbnail,
            };
          });
          setBooks(bookData);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [categoryId]);

  const addToFavorites = (bookId) => {
    const bookToAdd = books.find(book => book.id === bookId);
    if (bookToAdd) {
      setFavorites([...favorites, bookToAdd]);
    }
  };

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div>
      <header style={{ backgroundColor: '#f8f9fa', padding: '20px', marginBottom: '20px' }} className="text-center">
        <h1>Favourites Library</h1>
        <button className="btn btn-primary" onClick={toggleFavorites}>
          {showFavorites ? 'Hide Favorites' : 'Show Favorites'}
        </button>
      </header>
      <div className="row">
        {books.map(book => (
          <div key={book.id} className="col-md-4">
            <div className="card mb-4" style={{ border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <img src={book.image} alt={book.title} className="card-img-top" style={{ maxHeight: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{book.title}</h5>
                <p className="card-text" style={{ fontSize: '1rem', color: '#555' }}>Author(s): {book.authors?.join(', ')}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToFavorites(book.id)}
                  style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}
                >
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showFavorites && (
        <div className="favorites-section">
          <h2>Favorites</h2>
          <div className="row">
            {favorites.map(favorite => (
              <div key={favorite.id} className="col-md-4">
                <div className="card mb-4" style={{ border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                  <img src={favorite.image} alt={favorite.title} className="card-img-top" style={{ maxHeight: '200px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{favorite.title}</h5>
                    <p className="card-text" style={{ fontSize: '1rem', color: '#555' }}>Author(s): {favorite.authors?.join(', ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BookList;
