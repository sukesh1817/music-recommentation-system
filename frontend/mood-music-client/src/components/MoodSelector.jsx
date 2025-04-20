const moods = [
  { mood: 'Happy', emoji: '😊' },
  { mood: 'Sad', emoji: '😢' },
  { mood: 'Chill', emoji: '😎' },
  { mood: 'Focused', emoji: '🎯' },
];

const MoodSelector = ({ onMoodSelect, loadingMood }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6">
      {moods.map(({ mood, emoji }) => {
        const isLoading = loadingMood === mood;
        return (
          <button
            key={mood}
            onClick={() => onMoodSelect(mood)}
            disabled={isLoading}
            className={`flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
            ) : (
              <span className="text-xl">{emoji}</span>
            )}
            {mood}
          </button>
        );
      })}
    </div>
  );
};

export default MoodSelector;
