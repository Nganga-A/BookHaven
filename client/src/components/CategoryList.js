
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookCategories = ({category_id}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories and their books from your Flask API
    axios.get(`https://bookhaven-i7e2.onrender.com/${category_id}/books`)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Book Categories</h1>
      {categories.map(category => (
        <div key={category_id} className="my-4">
          <h2>{category.name}</h2>
          <div className="row">
            {category.books.map(book => (
              <div key={book.id} className="col-md-4">
                <div className="card mb-4">
                  <img src={book.cover_image} className="card-img-top" alt={book.name} />
                  <div className="card-body">
                    <h5 className="card-title">{book.name}</h5>
                    <p className="card-text">{book.author}</p>
                    <p className="card-text">{book.publication_year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookCategories;
