import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title" >Get In Touch</h2>
      <p className="contact-intro">
        Interested in collaborating or have questions about my work? Feel free to reach out through any of the links below:
      </p>

      <div className="contact-boxes" data-aos="fade-up">
        <a href="alexandra.mantagas@gmail.com" className="contact-box">
          <FaEnvelope className="contact-icon" />
          <span>alexandra.mantagas@gmail.com</span>
        </a>
        <a href="https://github.com/amm1746" className="contact-box" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon" />
          <span>https://github.com/amm1746</span>
        </a>
        <a href="https://linkedin.com/in/alexandra-mantagas" className="contact-box" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon" />
          <span>https://linkedin.com/in/alexandra-mantagas</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
