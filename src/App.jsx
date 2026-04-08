import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import Dashboard from "./pages/Dashboard.jsx";
import Pipeline from "./pages/Pipeline.jsx";
import Ingest from "./pages/Ingest";
import Transform from "./pages/Transform";
import Chocolate from "./pages/Chocolate";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // 🔵 Loading screen (fake Azure)
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-box">
          <h1>Azure Data Factory</h1><br />
          <h3>v4.0 Birthday Edition </h3>
          <p>Trwa ładowanie...</p>
        </div>
      </div>
    );
  }

  // 🚀 Routing
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pipeline" element={<Pipeline />} />
        <Route path="/ingest" element={<Ingest />} />
        <Route path="/transform" element={<Transform />} />
        <Route path="/chocolate" element={<Chocolate />} />
      </Routes>
      {Array.from({ length: 8 }).map((_, i) => (
  <div
    key={i}
    className="balloon"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${i * 1.5}s`
    }}
  >
    🎈
  </div>
))}
    </HashRouter>
  );
}

export default App;