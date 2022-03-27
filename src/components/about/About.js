import React from "react";
import "./About.css";
import AboutPic from "../../assests/about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>

        <div className="container about_container">
          <div className="about_me">
            <div className="about_me_image">
              <img src={AboutPic} alt="about-img" />
            </div>
          </div>

          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <FaAward className="about_icon" />
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </article>

              {/* <article className="about_card">
                <FiUsers className="about_icon" />
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article> */}

              <article className="about_card">
                <VscFolderLibrary className="about_icon" />
                <h5>Projects</h5>
                <small>10+ completed</small>
              </article>
            </div>

            <p>
              I'm a full stack web developer. Experienced in developing Web
              pages from design to test and up to production deployment.
              Maintained client websites on an ongoing basis. Executed and
              contributed to full-stack web development projects, with an
              emphasis on front end features, browser manipulation, and
              cross-browser compatibility.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
