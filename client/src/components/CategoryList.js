
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
};

const CategoryDisplay = ({ category_id }) => {
  const [books, setBooks] = useState([]); // Change variable name to 'books'
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch books from your Flask API using axios
    axios.get(`https://bookhaven-i7e2.onrender.com/${category_id}/books`)
      .then(response => {
        setBooks(response.data); // Correct the function name to 'setBooks'
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError(error.message);
      });
  }, [category_id]);

  return (
    <div>
      <h1>Category Books</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
};

export default CategoryDisplay;
