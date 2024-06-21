import React from "react";
import "./Navbar.css";
import {useNavigate} from "react-router-dom";

  
function Navbar(){
    const navigate=useNavigate();
  const goToAboutPage=()=>{
    navigate("/about-me")
  }
  const goToResumePage=()=>{
    navigate("/Resume")
  }
  const goToProjectPage=()=>{
    navigate("/Project")
  }
  const goToExperiencePage=()=>{
    navigate("/Experience")
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
                <p onClick={goToExperiencePage}>Experience</p>
                <p onClick={goToProjectPage}>Projects</p>
                <p onClick={goToResumePage}>Resume</p>
            </div>
        </div>
        <hr/>
        </>
    )
}
export default Navbar;