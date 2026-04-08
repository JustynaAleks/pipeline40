import { useState } from "react";
import Topbar from "../components/Topbar";
import "./Transform.css";
import { useNavigate } from "react-router-dom";
import {
  Home24Regular,
  Edit24Regular,
  Settings24Regular,
  Toolbox24Regular,
  HatGraduation24Regular
} from "@fluentui/react-icons";

function Transform() {
  const navigate = useNavigate();
  const before = "/images/gallery/marek53.jpeg";
  const after = "/images/gallery/marek15.jpeg";

  const [stage, setStage] = useState("idle");

  const handleTransform = () => {
    if (stage !== "idle") return;

    setStage("processing");

    setTimeout(() => {
      setStage("done");
    }, 2000);
  };

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
          <div className="content transform-page">

            <h1 className="transform-title">Transform Engine</h1>

            <div className="transform-box">

              {/* BEFORE */}
              <div className="image-block">
                <p>Before</p>
                <img
                  src={before}
                  className={`image ${stage === "done" ? "faded" : ""}`}
                />
              </div>

              {/* ARROW */}
              <div className="arrow">
                {stage === "processing" ? "⚙️" : "➡️"}
              </div>

              {/* AFTER */}
              <div className="image-block">
                <p>After</p>
                <img
                  src={after}
                  className={`image ${
                    stage === "done" ? "visible" : "hidden"
                  }`}
                />
              </div>

            </div>

            <button className="transform-btn" onClick={handleTransform}>
              Transform
            </button>

            {stage === "processing" && (
              <p className="status">Transforming chaos into legend...</p>
            )}

            {stage === "done" && (
              <p className="status success">✨ Legendary output generated</p>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default Transform;