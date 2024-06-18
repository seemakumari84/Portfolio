import React from "react";
import "./TechStack.css";
import cyber from "../../images/cyber.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import java from "../../images/java.png";
import solidity from "../../images/solidity.png";
import firebase from "../../images/firebase.png";
import react from "../../images/react.png";
import appDev from "../../images/appDev.png";
import TechStackIconContainer from "./TechStackIconContainer/TechStackIconContainer";

function TechStack() {
  const techstackData1 = [
    {
      iconImage: react,
      iconAlt: "reactImage",
      iconName: "React",
    },
    {
      iconImage: cyber,
      iconAlt: "cyberImage",
      iconName: "CyberSecurity",
    },
    {
      iconImage: appDev,
      iconAlt: "AndroidImage",
      iconName: "AppDev",
    },
    {
      iconImage: solidity,
      iconAlt: "solidityImage",
      iconName: "solidity",
    },
  ];
  const techstackData2 = [
    {
      iconImage:html,
      iconAlt: "html",
      iconName: "HTML5",
    },
    {
      iconImage: css,
      iconAlt: "CSS",
      iconName: "CSS3",
    },
    {
      iconImage: java,
      iconAlt: "javaImage",
      iconName: "java",
    },
    {
      iconImage: firebase,
      iconAlt: "firebaseImage",
      iconName: "firebase",
    },
  ];

  return (
    <div className="TechStack_cont">
      <p className="Techstack_title">TechStack</p>
      <div className="Techstack_img_row_cont">
        {techstackData1.map((value, key) => {
          return (
            <TechStackIconContainer
              image={value.iconImage}
              altProperty={value.iconAltProperty}
              name={value.iconName}
            />
          );
        })}
      </div>
      <div className="Techstack_img_row_cont">
        {techstackData2.map((value, key) => (
          <TechStackIconContainer
            image={value.iconImage}
            altProperty={value.iconAltPropery}
            name={value.iconName}
          />
        ))}
      </div>
    </div>
  );
}
export default TechStack;
