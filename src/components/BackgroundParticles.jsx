import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 h-full w-full bg-gray-100 opacity-20"
        options={{
            background: {
            color: {
                value: "transparent",
            },
            },
            fullScreen: { enable: false },
            particles: {
            number: {
                value: 60,
                density: {
                enable: true,
                area: 800,
                },
            },
            color: {
                value: ["#111111", "#555555"], // dark black and gray mix
            },
            links: {
                enable: true,
                color: "#444444", // medium gray lines
                distance: 130,
                opacity: 0.5,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1,
                outModes: {
                default: "out",
                },
            },
            opacity: {
                value: 0.7,
            },
            size: {
                value: { min: 1.5, max: 3.5 },
            },
            },
            interactivity: {
            events: {
                onHover: {
                enable: true,
                mode: "repulse",
                },
            },
            modes: {
                repulse: {
                distance: 100,
                duration: 0.4,
                },
            },
            },
            detectRetina: true,
        }}
    />

  );
};
