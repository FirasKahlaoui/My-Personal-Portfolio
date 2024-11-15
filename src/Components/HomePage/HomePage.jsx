import React, { useEffect } from 'react';
import './HomePage.css';
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import particlesJS from 'particles.js';
const ParticleBackground = () => {
  useEffect(() => {
    // Initialize particlesJS with the given configuration
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#69b3a2"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#69b3a2",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: "#b61924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover"
      }
    });
  }, []); // Empty dependency array ensures it only runs once when the component mounts
}

function Header() {
  return (
    <section
      className="home pt-5 d-flex flex-column align-items-center justify-content-center position-relative"
      id="home"
      style={{ minHeight: "100vh", overflow: "hidden" }}
    >
      {/* Particles.js container (Background) */}
      <div
        id="particles-js"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      ></div>

      {/* Section content (Centered and overlaying particles) */}
      <div
        className="d-flex flex-column align-items-center justify-content-center w-100 position-relative"
        style={{ zIndex: 1 }}
      >
        {/* Image Section */}
        <div className="d-flex justify-content-center w-100 mb-4">
          <img
            src="/Users/yasminezaatour/yasmine-portfolio/src/Assets/yasmine-img-rond.png"
            className="img-fluid rounded-circle"
            style={{ width: "100%", maxWidth: "200px", height: "auto" }}
            alt="Yasmine's Image"
          />
        </div>

        {/* Text Section */}
        <div className="col-10 col-md-6 text-center mt-4">
          <h1 style={{ color: "#05195f" ,fontWeight: "400", paddingBottom: "20px"}}>
            <span>Yasmine Zaatour</span>
          </h1>
          <h4 style={{fontWeight: "300", paddingBottom : "20px", color: "#000000"}}>
            <span style={{ color: "rgba(0, 0, 0, 0.5)", fontWeight: "200", 
    fontFamily: "Montserrat, 'Helvetica Neue', Helvetica, Arial, sans-serif"}}>
              👋 Hi, I'm a Data Science Student | Machine Learning Enthusiast <br/>
            </span>
             Enhancing skills in Machine Learning <br/>
            and Data Analytics through hands-on projects. 🌟.
          </h4>

          {/* Social Buttons */}
          <ul className="list-inline p social-buttons"style={{ height: "70px"}} >
            <li className="list-inline-item mx-3" >
              <a href="" className="social-icon">
                <FaTwitter style={{ fontSize: '1.9rem' ,color: "#000000"}}/>
              </a>
            </li>
            <li className="list-inline-item mx-1">
              <a href="" className="social-icon">
                <FaGithub style={{ fontSize: '1.9rem' ,color: "#000000"}}/>
              </a>
            </li>
            <li className="list-inline-item mx-3">
              <a href="" className="social-icon">
                <FaLinkedin style={{ fontSize: '1.9rem',color: "#000000"}}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

  );
}

export default Header;
