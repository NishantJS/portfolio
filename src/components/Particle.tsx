import Particles from 'react-particles-js';

const Particle = (): JSX.Element => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 1000,
            }
          },
          color: {
            value: "#311b92",
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: true
            }
          },
          line_linked: {
            enable: true,
            color: "#311b92",
            width: 2,
            opacity: 1
          }
        },
        retina_detect: true
      }
      }

      className="bg_particle"
    />
  )
}

export default Particle
