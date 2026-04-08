import { useState, useEffect } from "react";
import Topbar from "../components/Topbar";
import "./Chocolate.css";
import { useNavigate } from "react-router-dom";
import {
  Home24Regular,
  Edit24Regular,
  Settings24Regular,
  Toolbox24Regular,
  HatGraduation24Regular
} from "@fluentui/react-icons";

function Chocolate() {
  const navigate = useNavigate();

  const [stage, setStage] = useState("idle");
  const [visibleLines, setVisibleLines] = useState([]);

  const runCheck = () => {
    // 🔥 reset + możliwość ponownego uruchomienia
    setVisibleLines([]);
    setStage("checking");

    setTimeout(() => setStage("missing"), 2000);
    setTimeout(() => setStage("installing"), 5000);
    setTimeout(() => setStage("done"), 8000);
  };

  // 🔥 DOKLEJANIE LINII (NIE ZAMIANA)
  useEffect(() => {
    let lines = [];

    if (stage === "checking") {
      lines = [
        "",
        "Checking system dependencies...",
        "🍵 Tea: OK",
        "🍓 Strawberries: OK",
        "🍫 Chocolate: OK"
      ];
    }

    if (stage === "missing") {
      lines = [
        "",
        "Re-checking modules...",
        "🎂 Birthday Cake: OK",
        "☕ Hot Chocolate: OK",
        "🍫 Marshmallows: MISSING ❌",
        "Retrying search..."
      ];
    }

    if (stage === "installing") {
      lines = [
        "",
        "Installing marshmallows...",
        "Downloading sweetness package...",
        "Injecting happiness...",
        "Calibrating sugar levels..."
      ];
    }

    if (stage === "done") {
      lines = [
        "",
        "🍫☕ Marshmallows installed ✅",
        "🍓 Strawberries dipped in chocolate ready ✅",
        "System stable 😎"
      ];
    }

    let index = 0;

    const interval = setInterval(() => {
      if (index >= lines.length) {
        clearInterval(interval);
        return;
      }

      // 🔥 DOKLEJAMY zamiast resetować
      setVisibleLines((prev) => [...prev, lines[index]]);
      index++;
    }, 500);

    return () => clearInterval(interval);
  }, [stage]);

  return (
    <>
      <Topbar />

      <div className="layout">
        <div className="sidebar">
          <Home24Regular onClick={() => navigate("/")} />
          <Edit24Regular />
          <Settings24Regular />
          <Toolbox24Regular />
          <HatGraduation24Regular />
        </div>

        <div className="main">
          <div className="content chocolate-page">

            <h1 className="choco-title">Dependency Check 🍫</h1>

            <button className="choco-btn" onClick={runCheck}>
              Run check
            </button>

            <div className="terminal">
              {visibleLines.map((line, i) => {
                const text = line || "";

                return (
                  <p
                    key={i}
                    className={
                      text.includes("MISSING")
                        ? "error"
                        : text.includes("Installing")
                        ? "warn"
                        : text.includes("stable")
                        ? "success"
                        : ""
                    }
                  >
                    {text}
                  </p>
                );
              })}

              {/* 🔥 CURSOR zawsze aktywny poza idle */}
              {stage !== "idle" && <span className="cursor">_</span>}
            </div>

            {/* 🍫 FINAL */}
            {stage === "done" && (
              <div className="choco-final">
                <img src="/images/chocolate.png" alt="chocolate" />
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default Chocolate;