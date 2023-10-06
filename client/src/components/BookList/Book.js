import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import "./BookList.css";

const Book = (book) => {
  const [message, setMessage] = useState('');

  const handleAddToBooklist = async () => {
    try {
      // Retrieve the JWT token from localStorage (or your preferred storage)
      const jwtToken = localStorage.getItem('token'); // Replace with your actual storage mechanism
  
      if (!jwtToken) {
        // Handle the case where the token is not found (user is not logged in)
        console.error('User is not logged in');
        return;
      }
  
      // Make an authenticated request to your backend to add the book to favorites
      await axios.post('/api/add-to-favorites', { bookId: book.id }, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
  
      // Provide user feedback (e.g., show a success message)
      console.log(`Added "${book.title}" to favorites`);
      
      // Update the message state to show a success message
      setMessage(`Added "${book.title}" to favorites`);
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error('Error adding to favorites:', error);
      
      // Update the message state to show an error message
      setMessage('Error adding to favorites. Please try again.');
    }
  };

  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src={book.cover_img} alt="cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to={`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>

        {/* Button to add the book to favorites */}
        <button className='add-to-booklist-button' onClick={handleAddToBooklist}>
          Add to Favorites
        </button>

        {/* Display the message */}
        <div className="message">{message}</div>
      </div>
    </div>
  );
}

export default Book;
