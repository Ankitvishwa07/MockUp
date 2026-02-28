import React, { useState } from "react";
import "./IronMan.css";
import ironmanImage from "./assets/ironman.png";

const IronMan = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="ironman-container">
      <h1 className="ironman-title">IRON MAN</h1>

      <div className="ironman-banner">
        <img
          src={ironmanImage}
          alt="Iron Man"
          className="banner-img"
        />
        <span className="banner-text">
          THE INVINCIBLE IRON MAN
        </span>
      </div>

      <div className="ironman-card">
        <h2>TONY STARK</h2>

        <p className="quote">
          "GENIUS. BILLIONAIRE. PLAYBOY. PHILANTHROPIST."
        </p>

        <p>
          Tony Stark is a brilliant engineer who built a suit of armor
          powered by an arc reactor, turning himself into one of Earth's
          greatest heroes.
        </p>

        <p className="power-text">
          POWERED BY TECHNOLOGY. DRIVEN BY SACRIFICE.
        </p>

        <p className="stats">
          INTELLIGENCE: GENIUS LEVEL • SUIT VERSIONS: 85+ •
          CATCHPHRASE: "I AM IRON MAN."
        </p>

        <p className="ironman-info">
          Tony Stark’s journey begins when he is captured in Afghanistan and
          forced to build weapons. Instead, he creates the first Iron Man suit
          to escape. This experience changes him forever and he becomes one of
          the founding members of the Avengers.

          Iron Man was created by Stan Lee and first appeared in 1963 under Marvel Comics. The character’s true identity is Tony Stark, a brilliant billionaire engineer and industrialist known for designing advanced weapons and technology. While demonstrating his weapons in a war zone, Stark was captured and seriously injured by shrapnel that lodged near his heart. To survive, he built a life-saving device called the arc reactor and secretly constructed a powerful armored suit to escape captivity. After returning home, he redesigned the suit into the high-tech Iron Man armor and chose to use his intelligence and resources to protect the world rather than profit from war. Over the years, Iron Man evolved into one of Marvel’s most complex heroes, facing not only external enemies but also personal struggles such as guilt, responsibility, and the consequences of technology. His global popularity grew even more through the Marvel Cinematic Universe, where his journey from arrogant genius to selfless hero became one of the most iconic character arcs in modern superhero history.

        </p>
      </div>

      <div className="arc-section">
        <p>
          ACTIVATE SUIT →
          <span
            className="arc-link"
            onClick={() => setShowModel(true)}
          >
            ENTER STARK PROTOCOL
          </span>
        </p>
      </div>

      {/* ✅ 3D MODEL SECTION */}
      {showModel && (
        <div className="model-container">
          <div className="sketchfab-embed-wrapper">
            <iframe
              title="Iron Man"
              frameBorder="0"
              allowFullScreen
              mozAllowFullScreen="true"
              webkitAllowFullScreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              src="https://sketchfab.com/models/69dde1ad49e94852984e3d83928efd65/embed"
            ></iframe>
          </div>

          <p className="model-credit">
            <a
              href="https://sketchfab.com/3d-models/iron-man-69dde1ad49e94852984e3d83928efd65"
              target="_blank"
              rel="noreferrer"
            >
              Iron Man
            </a>{" "}
            by{" "}
            <a
              href="https://sketchfab.com/grandriley"
              target="_blank"
              rel="noreferrer"
            >
              Grant Riley
            </a>{" "}
            on{" "}
            <a
              href="https://sketchfab.com"
              target="_blank"
              rel="noreferrer"
            >
              Sketchfab
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default IronMan;