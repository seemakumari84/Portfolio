import React from "react";
import ProjectBox from "./ProjectBox/ProjectBox";
import "./Projects.css";
import app from "../../images/app.png";
import web from "../../images/webbb.jpg"
import UI from "../../images/ui.png"

function Projects() {
  const projectsData = [
    {
      image: UI,
      title: "UI/UX Projects",
      sentences: [
        "Designed interfaces for a variety of applications including:-",
        "1) Food delivery services ",     
       " 2) E-commerce platforms like Amazon, Flipkart etc ",
       "3) Starbucks corporations"
       
      ],
      link: "https://www.figma.com/files/team/1299986545161488355/",
    },{
      image: web,
      title: "WebDev Projects ",
      sentences: [
        "1) Created a Rock-Paper-Scissors and tic-tac-toe game using javascript, html, css",
        "2) Developed a website to assist farmers in accessing information about crop diseases and renting agricultural tools ",
        "3) Created websites clone of Nas.io, Amazon using html and css"
      ],
      link: "https://github.com/seemakumari84",
    },
    
    {
      image: app,
      title: "AppDev Projects",
      sentences: [
       "1) Created ToDo app on Android Studio using Kotlin"
      ],
      link: "https://github.com/seemakumari84/Todo-app",
    },
  ];

  return (
    <div id="projects">
      <p className="projects_title">Projects</p>
      <div className="projects_box_container">
        {projectsData.map((value, key) => (
          <ProjectBox
            title={value.title}
            image={value.image}
            sentences={value.sentences}
            link={value.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
