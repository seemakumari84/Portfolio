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
        "Designed interfaces of applications including:-",
        <li>Food delivery services and Starbucks corporations</li>,     
       <li>E-commerce platforms like Amazon, Flipkart etc </li>,    
      ],
      link: "https://shorturl.at/mgF4V",
    },{
      image: app,
      title: "AppDev Projects",
      sentences: [
       <li>Created ToDo app on Android Studio using Kotlin language and real time database</li>
      ],
      link: "https://shorturl.at/69Q0L",
    },{
      image: web,
      title: "WebDev Projects ",
      sentences: [

        <li>Created websites clone of Nas.io, Amazon</li>,
        <li>Developed a website to assist farmers </li>,        <li>Created Rock-Paper-Scissors & Tic-Tac-Toe game</li>,

      ],
      link: "https://github.com/seemakumari84",
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
