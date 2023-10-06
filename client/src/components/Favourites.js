import { useState, useEffect } from 'react';
import api from './Api';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [newFavoriteBookId, setNewFavoriteBookId] = useState('');

  useEffect(() => {
    // Fetch the list of favorites when the component mounts
    api.get('/favorites')
      .then(response => {
        setFavorites(response.data);
      })
      .catch(error => {
        console.error('Error fetching favorites:', error);
      });
  }, []);

  const addToFavorites = () => {
    const userId = 1; 
    api.post('/favorites', { user_id: userId, book_id: newFavoriteBookId })
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
      <h2 className="mt-4">My Favorites</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Enter book ID"
          value={newFavoriteBookId}
          onChange={(e) => setNewFavoriteBookId(e.target.value)}
          className="form-control"
        />
        <button onClick={addToFavorites} className="btn btn-primary mt-2">Add to Favorites</button>
      </div>
      <ul className="list-group">
        {favorites.map(favorite => (
          <li key={favorite.id} className="list-group-item">
            Book ID: {favorite.book_id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
