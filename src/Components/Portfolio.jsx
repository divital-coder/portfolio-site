/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/personal_pic_two.png";

const imageAltText = "dash sample apps in julia thumbnail";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Setting up a Visual Studio project for a GUI App",
    description:
      "Visual Studio Configuration for Dear Imgui project setup using glfw and opengl3 bindings. [c++]",
    url: "https://hurtbadly.hashnode.dev/setting-up-a-visual-studio-project-for-a-gui-app",
  },
  {
    title: "Data Visualisation applications in Julia",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/divital-coder/julez-dash.git",
  },
  {
    title: "Read.cv",
    description:
      "Read my Curriculum Vitae (CV) on here.",
    url: "https://read.cv/hurtbadly",
  },
  {
    title: "Microsoft Learn Student Ambassador Acceptance Video",
    description:
      "Video that enabled me to become a student ambassador within the Microsoft Learn community.",
    url: "https://youtu.be/qC2j07ql6SM",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
