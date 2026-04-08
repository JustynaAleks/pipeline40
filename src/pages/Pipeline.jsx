import { useState, useEffect } from "react";
import Topbar from "../components/Topbar";
import "./Pipeline.css";
import { useNavigate } from "react-router-dom";

import {
  Home24Regular,
  Edit24Regular,
  Settings24Regular,
  Toolbox24Regular,
  HatGraduation24Regular
} from "@fluentui/react-icons";

const stepsConfig = [
  { name: "Ingest", desc: "Memories" },
  { name: "Transform", desc: "Chaos → Legend" },
  { name: "Validate", desc: "Friendship check" },
  { name: "Deploy", desc: "Birthday 🎂" }
];

function Pipeline() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const images = Array.from({ length: 54 }, (_, i) => `/images/gallery/marek${i + 1}.jpeg`);

  const runPipeline = () => {
    setStep(1);
    setShowGallery(false);

    setTimeout(() => setStep(2), 1200);
    setTimeout(() => setStep(3), 2400);
    setTimeout(() => setStep(4), 3600);
  };

  // obsługa klawiatury
  useEffect(() => {
    const handleKey = (e) => {
      if (activeIndex === null) return;

      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }

      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      }

      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, images.length]);

  return (
    <>
      <Topbar />

      <div className="layout">
        {/* SIDEBAR */}
<div className="sidebar">
  <Home24Regular onClick={() => navigate("/")} />
  <Edit24Regular />
  <Settings24Regular />
  <Toolbox24Regular />
  <HatGraduation24Regular />
</div>

        {/* MAIN */}
        <div className="main">
          <div className="content">
            <h1>Birthday Pipeline 🎂</h1>

            <button className="run-btn" onClick={runPipeline}>
              Run pipeline
            </button>

            {/* PIPELINE */}
            <div className="pipeline">
              {stepsConfig.map((s, index) => {
                const current = index + 1;

                let status = "idle";
                if (step === current) status = "running";
                if (step > current) status = "success";

                return (
                  <div key={index} className="pipeline-item">
                    <div className={`step ${status}`}>
                      <div className="step-title">{s.name}</div>
                      <div className="step-desc">{s.desc}</div>
                    </div>

                    {index < stepsConfig.length - 1 && (
                      <div className="pipeline-arrow" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* DATASET */}
            {step === 4 && (
              <div
                className="dataset"
                onClick={() => setShowGallery(true)}
              >
                Open your present: 🎁 marek_memories_v40.parquet
              </div>
            )}

            {/* GALLERY */}
            {showGallery && (
              <div className="gallery">
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div className="lightbox" onClick={() => setActiveIndex(null)}>
          <button
            className="nav left"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
            }}
          >
            ‹
          </button>

          <img src={images[activeIndex]} />

          <button
            className="nav right"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => (prev + 1) % images.length);
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

export default Pipeline;