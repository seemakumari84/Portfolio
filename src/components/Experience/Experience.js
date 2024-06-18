import React from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import html from "../../images/html.png";
import js from "../../images/javascript.png";
import react from "../../images/react.png";
import blender from "../../images/blender.png";
import canva from "../../images/canva.png";
import figma from "../../images/figma.png";
import css from "../../images/css.png";

function Experience() {
  const statements = [
    "1.Developed a website to assist farmers in accessing information about crop diseases and renting agricultural tools ",
    "2. Created various UI/UX designs on figma like UI for Starbucks corporations,food delivery services",
    "3.Developed 3d models of biological species like liver fluke,leaves,Nephron,Tubules etc.",
    "4. Created many posters on metaverse,virtual reality etc. ",
  ];
  const iconImages = [react, js, html,css,figma,canva,blender];

  return (
    <div id="experience" className="experience_container">
      <p className="experience_title">Experience</p>
      <div className="experience_cards_container">
        <ExperienceCard
          companyName="Astomverse Innovations Pvt. Ltd."
          designation="SDE"
          statements={statements}
          iconImages={iconImages}
        />
       
      </div>
    </div>
  );
}

export default Experience;