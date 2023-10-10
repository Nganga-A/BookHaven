// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./BookList.css";

// const Book = (book) => {
//   return (
//     <div className='book-item flex flex-column flex-sb'>
//       <div className='book-item-img'>
//         <img src = {book.cover_img} alt = "cover" />
//       </div>
//       <div className='book-item-info text-center'>
//         <Link to = {`/book/${book.id}`} {...book}>
//           <div className='book-item-info-item title fw-7 fs-18'>
//             <span>{book.title}</span>
//           </div>
//         </Link>

//         <div className='book-item-info-item author fs-15'>
//           <span className='text-capitalize fw-7'>Author: </span>
//           <span>{book.author.join(", ")}</span>
//         </div>

//         <div className='book-item-info-item edition-count fs-15'>
//           <span className='text-capitalize fw-7'>Total Editions: </span>
//           <span>{book.edition_count}</span>
//         </div>

//         <div className='book-item-info-item publish-year fs-15'>
//           <span className='text-capitalize fw-7'>First Publish Year: </span>
//           <span>{book.first_publish_year}</span>
//         </div>
        
//       </div>
//     </div>
//   )
// }


// export default Book

// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./BookList.css";

// const Book = (book) => {
//   // Function to handle adding the book to the booklist
//   const handleAddToBooklist = () => {
//     // Implement the logic to add the book to the booklist here
//     console.log(`Added "${book.title}" to the booklist`);
//   };

//   return (
//     <div className='book-item flex flex-column flex-sb'>
//       <div className='book-item-img'>
//         <img src={book.cover_img} alt="cover" />
//       </div>
//       <div className='book-item-info text-center'>
//         <Link to={`/book/${book.id}`} {...book}>
//           <div className='book-item-info-item title fw-7 fs-18'>
//             <span>{book.title}</span>
//           </div>
//         </Link>

//         <div className='book-item-info-item author fs-15'>
//           <span className='text-capitalize fw-7'>Author: </span>
//           <span>{book.author.join(", ")}</span>
//         </div>

//         <div className='book-item-info-item edition-count fs-15'>
//           <span className='text-capitalize fw-7'>Total Editions: </span>
//           <span>{book.edition_count}</span>
//         </div>

//         <div className='book-item-info-item publish-year fs-15'>
//           <span className='text-capitalize fw-7'>First Publish Year: </span>
//           <span>{book.first_publish_year}</span>
//         </div>

//         {/* Button to add the book to the booklist */}
//         <button className='add-to-booklist-button' onClick={handleAddToBooklist}>
//           Add to Favourites
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Book;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = (book) => {
  const [addedToBooklist, setAddedToBooklist] = useState(false);

  // Function to handle adding the book to the booklist
  const handleAddToBooklist = () => {
    // Implement the logic to add the book to the booklist here
    // For this example, we'll just set a state to indicate it's added
    setAddedToBooklist(true);
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

        {/* Button to add the book to the booklist */}
        <button
          className='add-to-booklist-button'
          onClick={handleAddToBooklist}
          disabled={addedToBooklist} // Disable the button if already added
        >
          {addedToBooklist ? 'Added to Booklist' : 'Add to Booklist'}
        </button>
      </div>
    </div>
  );
}

export default Book;
