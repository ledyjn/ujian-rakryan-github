import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <section id="contact">
        <h1 className="contact-title">Let's Design Together</h1>
        <p className="contact-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laboriosam possimus vel
          animi expedita nisi a accusantium impedit. Minus voluptates autem veniam fugit dicta iure
          eum exercitationem consectetur iusto mollitia!
        </p>
        <div className="email-container">
          <input type="email" placeholder="Enter Your Email" className="email-input" />
          <button className="contact-button">Contact Me</button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
