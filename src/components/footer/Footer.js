import React from "react";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        PORTFOLIO
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/kumari_nisha13/" target="_blank">
          <BsInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100008447983565"
          target="_blank"
        >
          <BsFacebook />
        </a>
        <a href="https://twitter.com/home" target="_blank">
          <BsTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; PORTFOLIO WEBSITE</small>
      </div>
    </footer>
  );
};

export default Footer;
