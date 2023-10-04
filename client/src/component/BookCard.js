import React from "react";

function Card({ book, addToShelf }) {
  return (
    <>
      {book.map((item, index) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        return (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img src={thumbnail} className="card-img-top" alt={item.volumeInfo.title} />
            <div className="card-body">
              <h5 className="card-title">{item.volumeInfo.title}</h5>
              <p className="card-text">By: {item.volumeInfo.authors}</p>
              <p className="card-text">{amount}</p>
              <button className="btn btn-primary" onClick={() => addToShelf(item)}>
                ADD TO FAVOURITES
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;

