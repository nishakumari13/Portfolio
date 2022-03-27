import React from "react";
import "./Services.css";
import { TiTickOutline } from "react-icons/ti";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="services">
          <div className="services_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="services_list">
            <li>
              <TiTickOutline className="services_list_icon" />
              <p>Responsive websites</p>
            </li>
            <li>
              <TiTickOutline className="services_list_icon" />
              <p>Browser compatibility</p>
            </li>
            <li>
              <TiTickOutline className="services_list_icon" />
              <p>Interactive user interface</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="services_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="services_list">
            <li>
              <TiTickOutline className="services_list_icon" />
              <p>Responsive websites</p>
            </li>
            <li>
              <TiTickOutline className="services_list_icon" />
              <p>Browser compatibility</p>
            </li>
            <li>
              <TiTickOutline className="services_list_icon" />
              <p>Interactive user interface</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="services_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="services_list">
            <li>
              <TiTickOutline className="services_list_icon" />
              <p>Responsive websites</p>
            </li>
            <li>
              <TiTickOutline className="services_list_icon" />
              <p>Browser compatibility</p>
            </li>
            <li>
              <TiTickOutline className="services_list_icon" />
              <p>Interactive user interface</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
