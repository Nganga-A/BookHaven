// import { useState, useEffect } from 'react';
// import api from './Api';
// import { Link } from 'react-router-dom';

// function CategoryList() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     // Fetch the list of categories from the Flask API
//     api.get('/categories')
//       .then(response => {
//         setCategories(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching categories:', error);
//       });
//   }, []);

//   return (


//     <div className="container">
//       <h2 className="mt-4">Categories Library</h2>
//       <ul className="list-group">
        
//         {categories.map(category => (
//           <li key={category.id} className="list-group-item">
//             <Link to={`/category/${category.id}`} className="text-decoration-none text-dark">
//               {category.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CategoryList;






// import React, { useState, useEffect } from 'react';

// const BookList = ({ books }) => {
//   return (
//     <ul>
//       {books.map((book) => (
//         <li key={book.id}>{book.title}</li>
//       ))}
//     </ul>
//   );
// };

// const CategoryDisplay = ({ category_id }) => {
//   const [books, setBooks] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(`http://127.0.0.1:5500/category/${category_id}/books`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setBooks(data);
//         setError(null); // Clear any previous errors
//       })
//       .catch((error) => {
//         console.error('Fetch error:', error);
//         setError(error.message); // Set the error message in state
//       });
//   }, [category_id]);

//   return (
//     <div>
//       <h1>Category Books</h1>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <BookList books={books} />
//       )}
//     </div>
//   );
// };

// export default CategoryDisplay;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories and their books from your Flask API
    axios.get('http://127.0.0.1:5000/category/${category_id}/books')
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
        <div key={category.id} className="my-4">
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
