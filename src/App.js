import React from "react";
import MoodSelector from "./components/MoodSelector";

function Header() {
  return (
    <header style={{ marginBottom: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>MindEase</h1>
      <p style={{ color: "#334155", marginTop: 6 }}>Simple mental health tracker</p>
    </header>
  );
}

export default function App() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <Header />
      <main>
        <MoodSelector />
      </main>
    </div>
  );
}
