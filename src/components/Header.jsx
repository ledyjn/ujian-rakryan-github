import React from 'react';
import './Header.css';
import foto from '../assets/human.png';
import facebook from '../assets/Facebook.png';
import instagram from '../assets/Instagram.png';
import linkedin from '../assets/LinkedIn.png';
import twitter from '../assets/Twitter.png';

const Header = () => {
  return (
    <header className="py-5 bg-light">
      <section id="header">
        <div className="container d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
          <div className="text-section flex-grow-1 mb-4 mb-lg-0">
            <h1 className="mb-2">
              Hi, I am <span className="text-warning">Fawzi Sayed</span>
            </h1>
            <h2 className="fw-bold mb-3">Website Developer</h2>
            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed<br></br> maecenas nibh
              lectus netus in. Aliquet donec morbi convallis<br></br> pretium. Turpis tempus
              pharetra.
            </p>
            <a href="#contact" className="btn btn-primary px-4 py-2">
              Hire Me
            </a>
          </div>

          <div className="photo-section">
            <img
              src={foto}
              alt="Profile"
              className="rounded-circle mb-3"
              style={{ width: '200px', height: '200px', objectFit: 'contain' }}
            />

            <div className="social-icons d-flex justify-content-center gap-3 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" style={{ width: '30px', height: '30px' }} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" style={{ width: '30px', height: '30px' }} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" style={{ width: '30px', height: '30px' }} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
