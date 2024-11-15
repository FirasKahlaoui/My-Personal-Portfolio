import React from 'react';
import { Link } from 'react-scroll';
import './NavbarStyle.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
      <div className="container">
        <a className="js-scroll-trigger" href="#page-top" id="title">
          HOME
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="description" smooth={true} duration={500}>
                Intro
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="services" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog.html">
                Timeline
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="portfolio" smooth={true} duration={500}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="portfolio" smooth={true} duration={500}>
                Certifications
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
