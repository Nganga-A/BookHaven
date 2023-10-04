// src/components/BookList.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookList() {
  const { categoryId } = useParams();
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);

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

  return (
    <div>
      <h2>Books</h2>
      <ul className="list-group">
        {books.map(book => (
          <li key={book.id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <strong>Title:</strong> {book.title} <br />
                <strong>Author(s):</strong> {book.authors?.join(', ')} <br />
                {book.image && <img src={book.image} alt={book.title} />}
              </div>
              <button
                className="btn btn-primary"
                onClick={() => addToFavorites(book.id)}
              >
                Add to Favorites
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h3>Favorites</h3>
      <ul className="list-group">
        {favorites.map(favorite => (
          <li key={favorite.id} className="list-group-item">
            <strong>Title:</strong> {favorite.title} <br />
            <strong>Author(s):</strong> {favorite.authors?.join(', ')} <br />
            {favorite.image && <img src={favorite.image} alt={favorite.title} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
