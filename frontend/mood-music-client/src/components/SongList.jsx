import React, { useState, useRef, useEffect } from 'react';

const SongList = ({ songs, onFavorite, favorites = [] }) => {
  if (!songs.length) return <p className="text-center text-xl text-gray-300">No songs to show yet.</p>;

  const [playingSong, setPlayingSong] = useState(null); // Keep track of the currently playing song
  const [currentTime, setCurrentTime] = useState(0); // Track current time of the song
  const [duration, setDuration] = useState(0); // Track the duration of the song
  const audioRef = useRef({}); // Create a ref to store audio elements for each song

  const handlePlayClick = (songUrl) => {
    if (playingSong === songUrl) {
      // If the song is already playing, pause it
      audioRef.current[songUrl].pause();
      setPlayingSong(null);
    } else {
      // If it's not playing, play the selected song
      if (playingSong) {
        // Pause the currently playing song if any
        audioRef.current[playingSong].pause();
      }
      setPlayingSong(songUrl);
      audioRef.current[songUrl].play();
    }
  };

  const handleTimeUpdate = (songUrl) => {
    const audio = audioRef.current[songUrl];
    if (audio) {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {songs.map((song, i) => {
        const isFavorite = favorites.some(fav => fav.title === song.title);

        return (
          <div
            key={`${song.title}-${i}`}
            className="song-card bg-white text-black rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative rounded-t-lg overflow-hidden">
              {song.img_url && (
                <img
                  src={song.img_url}
                  alt={song.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-all duration-300"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            </div>

            <div className="p-4">
              {/* Song Title */}
              <h4 className="text-xl font-semibold text-center text-blue-800 hover:text-blue-600 transition-all duration-200 mb-2">{song.title}</h4>

              {/* Song Details */}
              {song.singers && (
                <p className="text-gray-600 text-sm mb-1"><strong>Singer:</strong> {song.singers}</p>
              )}
              {song.movie && (
                <p className="text-gray-600 text-sm mb-1"><strong>Movie:</strong> {song.movie}</p>
              )}
              {song.genre && (
                <p className="text-gray-600 text-sm mb-1"><strong>Genre:</strong> {song.genre}</p>
              )}

              <div className="flex justify-between items-center mt-4">
                {/* Play Button */}
                <button type="button"
                  onClick={() => handlePlayClick(song.url)}
                  className="text-black hover:text-white bg-blue hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300"
                >
                  {playingSong === song.url ? 'Pause' : ' Play'}
                </button>

                {/* Favorite Button */}
                {/* <button
                  onClick={() => onFavorite(song)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-xl transition-all duration-300 ${
                    isFavorite
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-gray-300 hover:bg-gray-400 text-gray-700'
                  }`}
                >
                  {isFavorite ? '💔' : '❤️'}
                </button> */}
              </div>

              {/* Audio Element (Hidden) */}
              <audio
                ref={(el) => (audioRef.current[song.url] = el)}
                src={song.url}
                preload="auto"
                onTimeUpdate={() => handleTimeUpdate(song.url)} // Update time on progress
              />

              {/* Song Timing */}
              <div className="text-gray-600 text-sm mt-2">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SongList;
