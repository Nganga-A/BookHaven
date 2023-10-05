import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/category/<categoryId>/books') 
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div>
      <header style={{ backgroundColor: '#f8f9fa', padding: '20px', marginBottom: '20px' }} className="text-center">
        <h1>Books</h1>
      </header>
      <div className="row">
        {books.map(book => (
          <div key={book.id} className="col-md-4">
            <div className="card mb-4" style={{ border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <img src={book.cover_image} alt={book.name} className="card-img-top" style={{ maxHeight: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{book.name}</h5>
                <p className="card-text" style={{ fontSize: '1rem', color: '#555' }}>Author(s): {book.author}</p>
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}
                >
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="favorites-section">
        <h2>Favorites</h2>
        {}
      </div>
    </div>
  );
}

export default BookList;