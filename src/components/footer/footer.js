import PropTypes from "prop-types";
import "./footer.css";
import MailIcon from "../../images/mail.jpg";
import YoutubeIcon from "../../images/youtube.jpg";
import DisordIcon from "../../images/discord.jpg";
import InstaIcon from "../../images/insta.jpg";
import {useNavigate} from "react-router-dom";

function footer(){
  const navigate=useNavigate();
  const goToDiscordPage=()=>{
    navigate("/Seema's Disord channel")
  }
  const goToInstaPage=()=>{
    navigate("/Seema's Instagram")
  }
  const goToYoutubePage=()=>{
    navigate("/Seema's Youtube channel")
  }
  const goToMailPage=()=>{
    navigate("/Seema's NIT Patna Mail")
  }
  return (
      <div className="group-child">
        <img className="group-child4" onClick={goToDiscordPage} alt="" src={DisordIcon} />
      <img className="group-child1" onClick={goToInstaPage} alt="" src={InstaIcon} />
      <img className="group-child2"onClick={goToYoutubePage} alt="" src={YoutubeIcon} />
      <img className="group-child3"onClick={goToMailPage} alt="" src={MailIcon} />
      <div className="design-by-seema">Made by Seema Kumari | Electrical Engineer @NIT Patna </div></div>
  );
  footer.propTypes = {
    className: PropTypes.string,
  };
  
};
export default footer;
