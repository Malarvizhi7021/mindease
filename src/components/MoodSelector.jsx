import React, { useState, useEffect } from "react";

const moods = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😤", label: "Angry" },
  { emoji: "😌", label: "Relaxed" },
  { emoji: "😟", label: "Anxious" },
];

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState("");
  const [savedMood, setSavedMood] = useState("");

  useEffect(() => {
    const storedMood = localStorage.getItem("todayMood");
    if (storedMood) {
      setSavedMood(storedMood);
      setSelectedMood(storedMood);
    }
  }, []);

  const handleSelect = (mood) => setSelectedMood(mood);

  const handleSave = () => {
    if (selectedMood) {
      localStorage.setItem("todayMood", selectedMood);
      setSavedMood(selectedMood);
    }
  };

  return (
    <div
      style={{
        background: "white",
        borderRadius: 16,
        padding: 20,
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
        marginTop: 30,
      }}
    >
      <h2 style={{ fontSize: 20, marginBottom: 10 }}>How are you feeling today?</h2>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => handleSelect(mood.label)}
            style={{
              fontSize: 24,
              padding: "10px 18px",
              borderRadius: 12,
              border: selectedMood === mood.label ? "2px solid #2563eb" : "1px solid #cbd5e1",
              background: selectedMood === mood.label ? "#eff6ff" : "#f8fafc",
              cursor: "pointer",
            }}
          >
            {mood.emoji} {mood.label}
          </button>
        ))}
      </div>

      <button
        onClick={handleSave}
        style={{
          marginTop: 20,
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: 12,
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        Save Mood
      </button>

      {savedMood && (
        <p style={{ marginTop: 15, color: "#475569" }}>
          🌿 You’re feeling <strong>{savedMood}</strong> today.
        </p>
      )}
    </div>
  );
}
