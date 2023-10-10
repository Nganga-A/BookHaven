import { useState, useEffect } from 'react';
import api from './Api';
import { useParams } from 'react-router-dom';

function BookList() {
  const { categoryId } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the list of books in the specified category from the Flask API
    api.get(`/category/${categoryId}/books`)
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, [categoryId]);

  return (
    <div className="container">
      <h2 className="mt-4">Books in this Category</h2>
      <div className="row">
        {books.map(book => (
          <div key={book.id} className="col-md-4">
            <div className="card mb-4">
              <img src={book.cover_image} alt={book.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{book.name}</h5>
                <p className="card-text">Author(s): {book.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;