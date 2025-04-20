import { useState, useEffect } from 'react';
import MoodSelector from './components/MoodSelector';
import SongList from './components/SongList';
import axios from 'axios';
import './styles.css';

function App() {
  const [mood, setMood] = useState('');
  const [songs, setSongs] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavs, setShowFavs] = useState(false);
  const [loadingMood, setLoadingMood] = useState('');

  // Load favorites from localStorage on first load
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favs);
  }, []);

  const saveFavorites = (favs) => {
    localStorage.setItem('favorites', JSON.stringify(favs));
    setFavorites(favs);
  };

  const handleMoodSelect = async (selectedMood) => {
    setLoadingMood(selectedMood); // Start spinner
    setMood(selectedMood);
    setShowFavs(false); // Hide favs when changing mood

    try {
      const res = await axios.get(`http://localhost/songs/${selectedMood.toLowerCase()}`);
      setSongs(res.data);
    } catch (err) {
      console.error('Error fetching songs:', err);
    } finally {
      setLoadingMood(''); // Stop spinner
    }
  };

  const handleFavorite = (song) => {
    const exists = favorites.find(fav => fav.title === song.title);
    const updated = exists
      ? favorites.filter(fav => fav.title !== song.title)
      : [...favorites, song];

    saveFavorites(updated);
  };

  return (
    <div className={`min-h-screen bg-gray-500 from-blue-400 to-blue-600 text-white`}>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-6 drop-shadow-lg">🎶 Mood Music Recommender</h1>
        
        {/* Mood Selector */}
        <MoodSelector onMoodSelect={handleMoodSelect} loadingMood={loadingMood} />

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowFavs(!showFavs)}
            className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-white hover:text-blue-500 transition-all duration-300"
          >
            {showFavs ? '🎶 Show Mood Songs' : '❤️ Show Favorites'}
          </button>
        </div>

        {/* Display Mood or Favorites */}
        <div className="mt-8">
          {showFavs ? (
            <>
              <h2 className="text-3xl text-center mb-6">Your Favorites ❤️</h2>
              <SongList songs={favorites} onFavorite={handleFavorite} favorites={favorites} />
            </>
          ) : (
            <>
              {mood && <h2 className="text-3xl text-center mb-6">{mood} Vibes 🎧</h2>}
              <SongList songs={songs} onFavorite={handleFavorite} favorites={favorites} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
