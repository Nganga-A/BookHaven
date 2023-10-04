import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./BookCard";
import homeImage from "./home.png";

export default function Main() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const [bookShelf, setBookShelf] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (bookData.length > 0) {
      setLoading(false);
    }
  }, [bookData]);

  function addToShelf(book) {
    const temporaryShelf = [...bookShelf];
    temporaryShelf.push(book);
    setBookShelf(temporaryShelf);
  }

  const searchBook = (event) => {
    if (event.key === "Enter") {
      setLoading(true);
      setImageLoaded(false);
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCqOKrqzMnQR7vgAcnOFa4WcfUD9djIuX4&maxResults=40`
        )
        .then((res) => {
          setData(res.data.items);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  };

  useEffect(() => {
    const img = new Image();
    img.src = homeImage;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <>
      <div className="pol">
        <div className="header">
          <div className="search">
            <input
              className="inputsearch"
              type="text"
              placeholder="Search your Book here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
          </div>
          {imageLoaded || loading ? (
            <img
              src={homeImage}
              alt=""
              className="img-fluid"
              onLoad={() => setImageLoaded(true)}
            />
          ) : (
            <div className="placeholder-image">
            </div>
          )}
        </div>

        <section className="py-4 container">
          <div className="row justify-content-center">
            {loading ? (
              <p>Loading books...</p>
            ) : (
              <Card book={bookData} addToShelf={addToShelf} />
            )}
          </div>
        </section>
      </div>
    </>
  );
}
