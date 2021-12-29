import React from 'react';
import Particles from 'react-particles-js';


function ParticleBackground(props) {
  return (
    <Particles
      params={{
        particles: {
          color: {
            value: "#fff"
          },
          line_linked: {
            color: {
              value: "#fff"
            }
          },
          number: {
            value: 30
          },
          size: {
            value: 3
          }
        }
      }}
    />
  );
}

export default ParticleBackground;