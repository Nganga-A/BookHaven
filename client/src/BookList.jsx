// src/components/BookList.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

// Mock data for books
const books = [
    { id: 1, title: 'Twilight', categoryId: 1, author: 'Stephenie Meyer' },
    { id: 2, title: 'DRUNK', categoryId: 2, author: 'Christopher Hitchens' },
    { id: 3, title: 'The Psychology of Money', categoryId: 3, author: 'Morgan Housel' },
    { id: 4, title: 'The Da Vinci Code', categoryId: 4, author: 'Dan Brown' },
    { id: 5, title: 'Harry Potter and the Sorcerer\'s Stone', categoryId: 5, author: 'J.K. Rowling' },
    { id: 6, title: 'The Catcher in the Rye', categoryId: 1, author: 'J.D. Salinger' },
    { id: 7, title: '1984', categoryId: 1, author: 'George Orwell' },
    { id: 8, title: 'To Kill a Mockingbird', categoryId: 1, author: 'Harper Lee' },
    { id: 9, title: 'Pride and Prejudice', categoryId: 1, author: 'Jane Austen' },
    { id: 10, title: 'Brave New World', categoryId: 1, author: 'Aldous Huxley' },
    { id: 11, title: 'The Great Gatsby', categoryId: 1, author: 'F. Scott Fitzgerald' },
    { id: 12, title: 'The Hobbit', categoryId: 5, author: 'J.R.R. Tolkien' },
    { id: 13, title: 'A Song of Ice and Fire', categoryId: 5, author: 'George R.R. Martin' },
    { id: 14, title: 'Dune', categoryId: 5, author: 'Frank Herbert' },
    { id: 15, title: 'Crime and Punishment', categoryId: 4, author: 'Fyodor Dostoevsky' },
    { id: 16, title: 'The Girl with the Dragon Tattoo', categoryId: 4, author: 'Stieg Larsson' },
    { id: 17, title: 'The Shining', categoryId: 4, author: 'Stephen King' },
    { id: 18, title: 'The Power of Habit', categoryId: 3, author: 'Charles Duhigg' },
    { id: 19, title: 'Educated', categoryId: 3, author: 'Tara Westover' },
    { id: 20, title: 'The Silent Patient', categoryId: 4, author: 'Alex Michaelides' },
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
              <strong>Title:</strong> {book.title} <br />
              <strong>Author:</strong> {book.author}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default BookList;