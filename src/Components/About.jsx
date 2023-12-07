/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/stock_image_one.webp";

const imageAltText = "stock background image of clouds";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Microsoft Learn Student Ambassador. Academia focus under Artificial Intelligence and Machine Learning";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Data Visualisation and GUI development (plotly,dash , c++)",
  "Machine Learning (julia , python) focus in Convolutional Neural Networks",
  "Cloud Development (Microsoft Azure suite of services)",
  "Web Design and Developmentt (Typescript, Sveltekit, Figma, Canva )"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Ongoing sophomore pursuing Machine Learning endeavours, utilising Azure AI services along the way. Data Visualisation in python and julia. Observational Health tooling contriubtions within the julia language ecosystem.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
