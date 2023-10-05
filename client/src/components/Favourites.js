import { useState, useEffect } from 'react';
import axios from 'axios';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch the list of favorite books from the Flask API
    axios.get('/favorites')
      .then(response => {
        setFavorites(response.data);
      })
      .catch(error => {
        console.error('Error fetching favorites:', error);
      });
  }, []);

  return (
    <div>
      <h2>My Favorites</h2>
      <ul>
        {favorites.map(favorite => (
          <li key={favorite.id}>
            {}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;