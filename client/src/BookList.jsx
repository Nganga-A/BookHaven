// src/components/BookList.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

// Mock data for books
const books = [
  { id: 1, title: 'Book 1', categoryId: 1 },
  { id: 2, title: 'Book 2', categoryId: 1 },
  { id: 3, title: 'Book 3', categoryId: 2 },
  { id: 4, title: 'Book 4', categoryId: 2 },
];

function BookList() {
  const { categoryId } = useParams();

  // Filter books based on categoryId 
  const filteredBooks = categoryId
    ? books.filter(book => book.categoryId.toString() === categoryId)
    : books;

  return (
    <div>
      <h2>Books</h2>
      <ul className="list-group">
        {filteredBooks.map(book => (
          <li key={book.id} className="list-group-item">
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;