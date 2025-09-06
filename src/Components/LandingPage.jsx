// src/components/LandingPage.jsx

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const LandingPage = ({ onGetStarted }) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000", // Solid black background for particles
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff", // Color of the particles
            },
            links: {
              color: "#ffffff", // Color of the lines between particles
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-6xl font-extrabold tracking-tight mb-4 animate-fade-in-down">
          Fluxor
        </h1>
        <p className="text-xl text-gray-400 mb-8 animate-fade-in">
          Your complete companion for student financial management. Track
          expenses, manage your time, and gain valuable insights.
        </p>
        <button
          onClick={onGetStarted}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Get Started
        </button>
      </div>
      <footer className="absolute bottom-4 text-sm text-gray-500 z-10">
        © 2025 Fluxor. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
