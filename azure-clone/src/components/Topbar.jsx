import {
  Search24Regular,
  Alert24Regular,
  Settings24Regular,
  Question24Regular
} from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
import "./Topbar.css";
import { useState } from "react";

function Topbar() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setMessage(""); // 🔥 reset przed nowym komunikatem

      const value = query.toLowerCase();

      if (
  value.includes("marek") ||
  value.includes("sikora")
) {
  setMessage("😎 LEGEND DETECTED");

} else if (
  value.includes("birthday") ||
  value.includes("urodziny") ||
  value.includes("40")
) {
  setMessage("🎂 HAPPY BIRTHDAY!");

} else if (value.includes("azure")) {
  setMessage("☁️ Cloud powered!");

} else {
  setMessage("🤷 No results… but still awesome");
}

      setTimeout(() => setMessage(""), 2500);
    }
  };

  return (
    <>
      <div className="topbar">
        {/* LEFT */}
        <div className="topbar-left">
          <span className="logo">Microsoft Azure</span>
          <span className="divider">|</span>
          <span>Data Factory</span>
          <span className="divider">›</span>
          <span className="factory" onClick={() => navigate("/")}>
            ZID-ADF
          </span>
        </div>

        {/* CENTER */}
        <div className="topbar-center">
          <div className="search">
            <Search24Regular />
            <input
              placeholder="wyszukaj"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="topbar-right">
          <div className="icon-wrapper">
            <Alert24Regular />
            <span className="badge">40</span>
          </div>

          <Settings24Regular />
          <Question24Regular />

          <div className="user">
            <img src="/images/icons/marek15.png" alt="user" />
            <div className="user-text">
              <div className="email">marek_v4.0@legendary.com</div>
              <div className="company">MASPEX WADOWICE</div>
            </div>
          </div>
        </div>
      </div>

      {/* 💬 SEARCH MESSAGE */}
      {message && <div className="search-message">{message}</div>}
    </>
  );
}

export default Topbar;