// src/components/LandingPage.jsx
import React, { useState, useEffect, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const LandingPage = ({ onGetStarted }) => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Overspent? Don’t worry, we’ve scheduled your overtime.";

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1)); // safe slice
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50); // typing speed in ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 overflow-hidden">
      {/* Background particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: { value: "#000000" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 1,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 120 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-6xl font-extrabold tracking-tight mb-3 animate-fade-in-down">
          Fluxer
        </h1>

        {/* First line */}
        <p className="text-xl text-gray-400 mb-10 animate-fade-in font-bold">
          Turning guilt into productivity.
        </p>

        {/* Typewriter second line */}
        <p
          className="text-lg text-gray-400 mb-3 animate-fade-in"
          aria-live="polite"
        >
          {displayText}
          <span className="blinking-cursor">|</span>
        </p>

        <button
          onClick={onGetStarted}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Get Started
        </button>
      </div>

      {/* Footer */}
      {/* <footer className="absolute bottom-4 text-sm text-gray-500 z-10">
        © 2025 Fluxer. All rights reserved.
      </footer> */}

      {/* Blinking cursor style */}
      <style>
        {`
          .blinking-cursor {
            display: inline-block;
            margin-left: 2px;
            width: 8px;
            color: #a78bfa;
            animation: blink 1s step-start infinite;
          }
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
