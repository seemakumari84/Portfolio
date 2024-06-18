import React from "react";
import "./Homepage.css";
import githubIcon from "../../images/github.png";
import linkedinIcon from "../../images/linkedin.png";

function Homepage() {
    return (
        <div className="homepage_container">
            <div className="homepage_left">
                <p className="homepage_left_h1"><span className="red_color">Hi,</span> my name is</p>
                <p className="homepage_left_h2">Seema Kumari</p>
                <p className="homepage_left_h3">I'm an SDE Intern at<span className="red_color"> Astomverse Innovations Pvt. Ltd.</span></p>
                <p className="homepage_left_description"><span id="highlight">NIT Patna Student Clubs:</span>
          <li>Blockchain Team member in <span>Hackslash club</span></li>
          <li>Technical Team member in <span>Robotics club</span></li>
          <li>Web Team member in <span>Tesla club</span></li>
        <p>Pursuing a BTech+MTech(Dual Degree) in Electrical Engineering from the National Institute of Technology, Patna.
        I have work experience as an SDE Intern at Astomverse Innovations Pvt. Ltd., where I developed website using React.js, created UI/UX designs, and built 3D models using Blender.My technical skills span multiple programming languages including Java, C, and JavaScript, with proficiency in frameworks like React.js.I'm also well-versed in various development and design tools such as Visual Studio Code, Blender, Canva, and Figma.My expertise extends into the realm of ethical hacking, with knowledge of tools like Burp Suite, Wireshark, and Metasploit Framework.</p></p>
                <div>
                    <a href="https://github.com/seemakumari8" target="_blank" id="gitImg">
                        <img src={githubIcon} alt="githubimage"width="64px" />
                    </a>
                    <a href="https://www.linkedin.com/in/seemakumari8/" target="_blank">
                        <img src={linkedinIcon} alt="linkedinimage"width="64px" />
                    </a>
                </div>
                <a href="mailto:seemakumari8122005@gmail.com">
                    <button className="homepage_left_button">Get in Touch</button>
                </a>
            </div>
            <div className="homepage_right">
                <img src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt="GIF" />
            </div>
        </div>
    )
}

export default Homepage;
      