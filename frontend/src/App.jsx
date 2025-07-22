import React, { useState } from "react";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setResult("");
    const response = await fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setResult(data.result);
    setLoading(false);
  };

  return (
    <div style={{ fontFamily: "Segoe UI", padding: "2rem", maxWidth: "700px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", color: "#4b4b4b" }}>🧠 AI Text Generator</h1>

      <textarea
        rows="6"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your prompt here..."
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
          marginBottom: "1rem",
        }}
      />

      <button
        onClick={handleGenerate}
        style={{
          padding: "10px 20px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      <div style={{ marginTop: "2rem", background: "#f9f9f9", padding: "1rem", borderRadius: "8px" }}>
        <h3>📝 Output:</h3>
        <pre style={{ whiteSpace: "pre-wrap", fontSize: "15px" }}>{result}</pre>
      </div>
    </div>
  );
};

export default App;

