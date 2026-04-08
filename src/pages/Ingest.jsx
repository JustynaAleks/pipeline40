import { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import "./Ingest.css";
import { useNavigate } from "react-router-dom";
import {
  Home24Regular,
  Edit24Regular,
  Settings24Regular,
  Toolbox24Regular,
  HatGraduation24Regular
} from "@fluentui/react-icons";

function Ingest() {
  const navigate = useNavigate();
  const images = Array.from(
    { length: 23 },
    (_, i) => `/images/gallery/marek${i + 1}.jpeg`
  );

  const messages = [
    "Uploading memories...",
    "Parsing chaos...",
    "Validating friendship...",
    "Filtering bad decisions...",
    "Optimizing legendary moments...",
    "Almost done..."
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [fade, setFade] = useState(true);

  // zmiana zdjęcia
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  // zmiana tekstu
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
          <div className="content ingest-page">
            
            <h1 className="ingest-title">Importing memories...</h1>

            <p className="ingest-status">
              {messages[currentMessage]}
            </p>

            <div className="ingest-image-wrapper">
              <img
                src={images[currentImage]}
                className={`ingest-image ${fade ? "fade-in" : "fade-out"}`}
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Ingest;