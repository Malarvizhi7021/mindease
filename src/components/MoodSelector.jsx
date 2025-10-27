import React, { useState, useEffect } from "react";

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [moodHistory, setMoodHistory] = useState([]);

  // Load moods from localStorage when app starts
  useEffect(() => {
    const savedMoods = JSON.parse(localStorage.getItem("moods"));
    if (savedMoods) setMoodHistory(savedMoods);
  }, []);

  // Save moods to localStorage whenever moodHistory changes
  useEffect(() => {
    localStorage.setItem("moods", JSON.stringify(moodHistory));
  }, [moodHistory]);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
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
        {["😊", "😐", "😔", "😤", "😴"].map((emoji) => (
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
  history: {
    marginTop: "20px",
    textAlign: "left",
    width: "80%",
    margin: "0 auto",
  },
};

export default MoodSelector;
