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
        <li>" Food delivery services and Starbucks corporations "</li>,     
       <li>"  E-commerce platforms like Amazon, Flipkart etc "</li>,    
      ],
      link: "https://www.figma.com/files/team/1299986545161488355/",
    },{
      image: app,
      title: "AppDev Projects",
      sentences: [
       <li>"Created ToDo app on Android Studio using Kotlin"</li>
      ],
      link: "https://github.com/seemakumari84/Todo-app",
    },{
      image: web,
      title: "WebDev Projects ",
      sentences: [
        <li>" Created a Rock-Paper-Scissors and tic-tac-toe game using JS "</li>,

        <li>"Created websites clone of Nas.io, Amazon"</li>,
        <li>" Developed a website to assist farmers in Accessing Information "</li>,
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
