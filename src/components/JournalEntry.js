import React, { useState, useEffect } from "react";

const JournalEntry = () => {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);

  // Load entries from localStorage when app starts
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries"));
    if (savedEntries) setEntries(savedEntries);
  }, []);

  // Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const handleSave = () => {
    if (entry.trim() !== "") {
      const newEntry = {
        text: entry,
        date: new Date().toLocaleString(),
      };
      setEntries([newEntry, ...entries]);
      setEntry("");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🧘‍♀️ Daily Journal</h2>

      <textarea
        style={styles.textarea}
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="How are you feeling today? Write it here..."
      />

      <button style={styles.button} onClick={handleSave}>
        Save Entry
      </button>

      <div style={styles.entriesContainer}>
        <h3 style={styles.subheading}>📖 Your Entries</h3>
        {entries.length === 0 ? (
          <p>No entries yet. Start journaling!</p>
        ) : (
          entries.map((note, index) => (
            <div key={index} style={styles.entry}>
              <p>{note.text}</p>
              <small style={{ color: "#555" }}>{note.date}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  textarea: {
    width: "80%",
    height: "100px",
    borderRadius: "8px",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
  entriesContainer: {
    marginTop: "20px",
    textAlign: "left",
    width: "80%",
    margin: "20px auto",
  },
  subheading: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  entry: {
    backgroundColor: "#f0f0f0",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
};

export default JournalEntry;
