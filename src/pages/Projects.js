import React from "react";
import Header from "../components/Header";
import { FaLaptopCode } from "react-icons/fa";
import projectsdata from "./projectsdata";

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="container projects-intro">
        <div className="row flex-with-center mt-5">
          <div className="col-md-6 n-box2 px-3 py-5" data-aos="fade-down">
            <div>
              <h1 className="font-bold">Projects</h1>
              <p className="font-bold">
                Good ideas are not adopted automatically. They must be driven
                into practice with courageous patience
              </p>
              <button className="primary-button projects-btn">
                <a href="#project-list">Get Started</a>
              </button>
            </div>
          </div>

          <div className="col-md-6 position-relative">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#0F62FE"
                d="M40.8,-69.1C50.5,-57.2,54.3,-41.9,59.9,-27.8C65.5,-13.8,73,-1.1,72.1,10.9C71.2,22.9,61.9,34.3,51.9,43.8C41.8,53.2,31,60.8,18.5,65.7C6.1,70.5,-7.9,72.6,-21.4,70C-34.8,67.3,-47.6,59.8,-57,49.2C-66.4,38.7,-72.3,25,-71.8,11.9C-71.3,-1.2,-64.3,-13.7,-58,-26.1C-51.8,-38.6,-46.3,-51,-36.7,-62.9C-27.2,-74.7,-13.6,-86.1,1,-87.6C15.6,-89.2,31.1,-80.9,40.8,-69.1Z"
                transform="translate(100 100)"
              />
            </svg>
            <FaLaptopCode
              color="white"
              size="80"
              className="position-absolute top-50 start-50 translate-middle"
            />
          </div>
        </div>
      </div>

      <div className="container projects-list" id="project-list">
        <h3 className="font-bold">Take a look of our projects</h3>
        <hr />
        <div className="row">
          {projectsdata.map((project) => {
            return (
              <div className="col-md-4">
                <div className="position-relative project">
                  <img src={project.image} alt="" />
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <hr />
                    <p>{project.description}</p>
                    <button className="primary-button">DEMO</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
