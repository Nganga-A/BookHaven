// AddBook.js

import React, { useState } from 'react';

function AddBook() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    publicationYear: '',
    coverImage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the book data to your backend to store in the database
    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });

      if (response.ok) {
        // Book added successfully
        alert('Book added successfully');
      } else {
        alert('Error adding book');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="publicationYear">Publication Year:</label>
          <input
            type="number"
            id="publicationYear"
            name="publicationYear"
            value={book.publicationYear}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="coverImage">Cover Image URL:</label>
          <input
            type="text"
            id="coverImage"
            name="coverImage"
            value={book.coverImage}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
