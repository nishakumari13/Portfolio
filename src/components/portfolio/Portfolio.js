import React from "react";
import "./Portfolio.css";
import Netflix from "../../assests/netflix.jpg";

const Portfolio = () => {
  const projectsData = [
    {
      id: 1,
      image: Netflix,
      title: "Netflix",
      github: "",
      demo: "",
    },
    {
      id: 2,
      image: Netflix,
      title: "Netflix",
      github: "",
      demo: "",
    },
    {
      id: 3,
      image: Netflix,
      title: "Blogs",
      github: "",
      demo: "",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        {projectsData.map((item) => {
          return (
            <article className="portfolio_item">
              <div className="portfolio_image">
                <img src={item.image} alt="netflix" />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio_item_cta">
                <a href={item.github} target="_blank" className="btn">
                  Github
                </a>
                <a href={item.demo} target="_blank" className="btn btn-primary">
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
