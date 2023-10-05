import { useState, useEffect } from 'react';
import axios from 'axios';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [newFavoriteBookId, setNewFavoriteBookId] = useState('');

  useEffect(() => {
    // Fetch the list of favorites when the component mounts
    axios.get('/favorites')
      .then(response => {
        setFavorites(response.data);
      })
      .catch(error => {
        console.error('Error fetching favorites:', error);
      });
  }, []);

  const addToFavorites = () => {
    const userId = 1; 
    axios.post('/favorites', { user_id: userId, book_id: newFavoriteBookId })
      .then(response => {
        setFavorites([...favorites, response.data]);
        setNewFavoriteBookId('');
      })
      .catch(error => {
        console.error('Error adding favorite:', error);
      });
  };

  return (
    <div>
      <h2>My Favorites</h2>
      <div>
        <input
          type="text"
          placeholder="Enter book ID"
          value={newFavoriteBookId}
          onChange={(e) => setNewFavoriteBookId(e.target.value)}
        />
        <button onClick={addToFavorites}>Add to Favorites</button>
      </div>
      <ul>
        {favorites.map(favorite => (
          <li key={favorite.id}>
            Book ID: {favorite.book_id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;