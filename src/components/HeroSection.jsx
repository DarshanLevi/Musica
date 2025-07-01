import React from "react";
import "./HeroSection.css"; // optional, see styles below

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          ENTER
          <br />
          THE WORLD OF
          <br />
          CONCERTS
        </h1>
        <p className="hero-subtitle">
          Live moments. Fair prices. Tailored for your taste. MUSICA is your ticket to the sound.
        </p>
        <button className="hero-button">Get App</button>
      </div>
      <div className="hero-image">
        <img
          src="https://i.ibb.co/Y3P61dV/osai-poster.jpg" 
          alt="Osai Concert Poster"
        />
      </div>
    </section>
  );
};

export default HeroSection;
