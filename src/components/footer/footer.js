import PropTypes from "prop-types";
import "./footer.css";
import MailIcon from "../../images/mail.jpg";
import YoutubeIcon from "../../images/youtube.jpg";
import DisordIcon from "../../images/discord.jpg";
import InstaIcon from "../../images/insta.jpg";

function footer(){
  return (
      <div className="group-child">
        <img className="group-child4" alt="" src={DisordIcon} />
      <img className="group-child1" alt="" src={InstaIcon} />
      <img className="group-child2" alt="" src={YoutubeIcon} />
      <img className="group-child3" alt="" src={MailIcon} />
      <div className="design-by-seema">Made by Seema Kumari | Electrical Engineer @NIT Patna </div></div>
        
  );
  footer.propTypes = {
    className: PropTypes.string,
  };
  
};
export default footer;
