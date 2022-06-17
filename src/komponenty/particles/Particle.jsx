import "./particle.css"

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particle() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };


  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}

      options={
        {
          fullScreen: { enable: false },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ff8039",
            },
            links: {
              color: "#ffffff",
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
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 40,
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
    />
  );
};


