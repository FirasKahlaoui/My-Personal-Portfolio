import React from 'react';
import './HomePage.css';
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

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
            src="images/graduationchayma.jpg"
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
