import React from "react";
import TaskApp from "./TaskApp";

function App() {
  const styles = {
    app: {
      textAlign: "center",
      padding: "40px 0",
      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      minHeight: "100vh",
      color: "#fff",
      fontFamily: "'Poppins', sans-serif",
    },
    title: {
      fontSize: "40px",
      fontWeight: "700",
      background: "linear-gradient(90deg, #ff8a00, #e52e71, #9b00ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "0 0 15px rgba(229, 46, 113, 0.6)",
      letterSpacing: "2px",
      marginBottom: "10px",
      animation: "glow 3s infinite alternate",
    },
    subtitle: {
      fontSize: "16px",
      fontWeight: "300",
      color: "#ccc",
      marginBottom: "30px",
      letterSpacing: "1px",
    },
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>🚀 TaskFlow</h1>
      <p style={styles.subtitle}>Stay organized. Stay focused. Conquer your goals.</p>
      <TaskApp />
    </div>
  );
}

export default App;
