"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyze() {
    if (!input) return;
    setLoading(true);
    setResult("");

    const res = await fetch("/api/analyze", {
      method: "POST",
      body: JSON.stringify({ input }),
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  }

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>TruthScan</h1>
      <p style={{ marginBottom: "30px", opacity: 0.7 }}>
        AI Will Tell You What Your Friends Won’t.
      </p>

      <textarea
        placeholder="Describe your situation..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "150px",
          padding: "15px",
          borderRadius: "8px",
          border: "none",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      <button
        onClick={analyze}
        style={{
          padding: "12px 25px",
          background: "#ff0033",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {loading ? "Analyzing..." : "Get Brutal Truth"}
      </button>

      {result && (
        <div
          style={{
            marginTop: "40px",
            maxWidth: "600px",
            background: "#111",
            padding: "20px",
            borderRadius: "8px",
            whiteSpace: "pre-wrap",
          }}
        >
          {result}
        </div>
      )}

      <a
        href="https://gumroad.com"
        target="_blank"
        style={{
          marginTop: "30px",
          color: "#00ffcc",
          textDecoration: "underline",
        }}
      >
        Unlock Deep Analysis ($29)
      </a>
    </main>
  );
}

