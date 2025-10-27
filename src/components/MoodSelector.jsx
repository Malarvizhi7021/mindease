import React, { useState, useEffect } from "react";

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [moodHistory, setMoodHistory] = useState([]);
  const [suggestion, setSuggestion] = useState("");

  // 🎯 Mood → Task suggestions mapping
  const moodSuggestions = {
    "😊": "Keep up your positive vibe! Try sharing your joy — text a friend or dance to your favorite song 💃",
    "😐": "Take a mindful break 🌿. Step outside, breathe deeply, or listen to calming music.",
    "😔": "Be gentle with yourself 💛. Write about your feelings in your journal or watch something comforting.",
    "😤": "Time to release that stress 💨. Go for a walk, stretch, or punch a pillow safely!",
    "😴": "Rest is important 😴. Drink some water and take a short nap if possible.",
  };

  // Load from localStorage
  useEffect(() => {
    const savedMoods = JSON.parse(localStorage.getItem("moods"));
    if (savedMoods) setMoodHistory(savedMoods);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("moods", JSON.stringify(moodHistory));
  }, [moodHistory]);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setSuggestion(moodSuggestions[mood]);

    const newMood = {
      mood,
      date: new Date().toLocaleString(),
    };
    setMoodHistory([newMood, ...moodHistory]);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>💭 How are you feeling today?</h2>

      <div style={styles.moods}>
        {Object.keys(moodSuggestions).map((emoji) => (
          <button
            key={emoji}
            style={{
              ...styles.moodButton,
              backgroundColor: selectedMood === emoji ? "#4CAF50" : "#e0e0e0",
            }}
            onClick={() => handleMoodSelect(emoji)}
          >
            {emoji}
          </button>
        ))}
      </div>

      {suggestion && (
        <div style={styles.suggestionBox}>
          <h3>🌈 Suggested Activity:</h3>
          <p>{suggestion}</p>
        </div>
      )}

      <div style={styles.history}>
        <h3>📅 Mood History</h3>
        {moodHistory.length === 0 ? (
          <p>No moods recorded yet.</p>
        ) : (
          <ul>
            {moodHistory.map((item, index) => (
              <li key={index}>
                {item.mood} — <small>{item.date}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f7fdf8",
    borderRadius: "12px",
  },
  heading: {
    fontSize: "24px",
  },
  moods: {
    marginTop: "10px",
  },
  moodButton: {
    fontSize: "24px",
    margin: "5px",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
  },
  suggestionBox: {
    backgroundColor: "#e8f5e9",
    borderRadius: "10px",
    padding: "15px",
    marginTop: "15px",
    fontSize: "16px",
    color: "#2e7d32",
    textAlign: "left",
    width: "80%",
    margin: "15px auto",
  },
  history: {
    marginTop: "20px",
    textAlign: "left",
    width: "80%",
    margin: "0 auto",
  },
};

export default MoodSelector;
