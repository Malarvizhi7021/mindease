import React from "react";
import MoodSelector from "./components/MoodSelector";
import JournalEntry from "./components/JournalEntry";

function App() {
  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <h1 style={styles.title}>🧠 MindEase</h1>
        <p style={styles.subtitle}>
          Track your mood and thoughts — one day at a time 💚
        </p>
      </header>

      <main style={styles.main}>
        <MoodSelector />
        <JournalEntry />
      </main>

      <footer style={styles.footer}>
        <p>Made with 💖 by Malar</p>
      </footer>
    </div>
  );
}

const styles = {
  appContainer: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9fcfb",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#4CAF50",
    width: "100%",
    padding: "20px 0",
    color: "white",
    textAlign: "center",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
  },
  title: {
    fontSize: "32px",
    margin: 0,
  },
  subtitle: {
    fontSize: "16px",
    marginTop: "8px",
  },
  main: {
    width: "90%",
    maxWidth: "800px",
    marginTop: "20px",
  },
  footer: {
    marginTop: "auto",
    padding: "10px",
    backgroundColor: "#e8f5e9",
    width: "100%",
    textAlign: "center",
    color: "#333",
  },
};

export default App;
