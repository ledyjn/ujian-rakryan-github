import React from 'react';
import './Hero.css';
import facebook from '../assets/Facebook.png';
import instagram from '../assets/Instagram.png';
import linkedin from '../assets/LinkedIn.png';
import twitter from '../assets/Twitter.png';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-logo">FAWZIUIUX</div>
      <nav className="hero-nav">
        <ul className="hero-menu">
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="social-icons d-flex justify-content-center gap-3 mt-3">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" style={{ width: '20px', height: '20px' }} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" style={{ width: '20px', height: '20px' }} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" style={{ width: '20px', height: '20px' }} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
