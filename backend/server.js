const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = 80;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/music_recommentation', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB ✅'));

// Define Schema
const songSchema = new mongoose.Schema({
  title: String,
  singers: String,
  movie: String,
  genre: String,
  mood: String, // e.g., happy, sad, chill, focused
  img_url: String,
  url: String,
});

const Song = mongoose.model('Song', songSchema);

// API Route
app.get('/songs/:mood', async (req, res) => {
  const mood = req.params.mood.toLowerCase();
  try {
    const songs = await Song.find({ mood }); // fetch from MongoDB
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch songs' });
  }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
