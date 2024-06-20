import React from "react";
import "./Navbar.css";
import {useNavigate} from "react-router-dom";

  
function Navbar(){
    const navigate=useNavigate();
  const goToAboutPage=()=>{
    navigate("/Seema's About Page")
  }
  const goToResumePage=()=>{
    navigate("/Seema's Resume")
  }
  const goToProjectsPage=()=>{
    navigate("/Seema's Projects Page")
  }
  const goToToolsPage=()=>{
    navigate("/Seema's Tools Page")
  }
  const goToExperiencePage=()=>{
    navigate("/Seema's Experience Page")
  }
    var name="<SK/>"
    return (
        <>
        <div className="nav_container">
            <div className="nav_left">
                {name}
            </div>
            <div className="nav_right">
                <p onClick={goToAboutPage}>About</p>
                <p onClick={goToToolsPage}>Tools</p>
                <p onClick={goToExperiencePage}>Experience</p>
                <p onClick={goToProjectsPage}>Projects</p>
                <p onClick={goToResumePage}>Resume</p>
            </div>
        </div>
        <hr/>
        </>
    )
}
export default Navbar;